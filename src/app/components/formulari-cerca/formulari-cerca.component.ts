import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
  AsyncValidatorFn,
  AbstractControl
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { debounceTime, map, switchMap, timer, of, catchError } from 'rxjs';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-formulari-cerca',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './formulari-cerca.component.html',
  styleUrl: './formulari-cerca.component.scss'
})
export class FormulariCercaComponent {

  @Output() cercaCanviada = new EventEmitter<string>();

  loading = false;

  constructor(private http: HttpClient) {

    // Cerca amb debounce
    this.form.get('termeCerca')!.valueChanges
      .pipe(debounceTime(400))
      .subscribe(value => {
        if (this.form.valid) {
          this.cercaCanviada.emit(value || '');
        }
      });
  }

  // FORMULARI REACTIU
  form = new FormGroup({
    termeCerca: new FormControl('', {
      validators: [
        Validators.minLength(2),
        Validators.maxLength(50)
      ],
      asyncValidators: [this.codiDisponibleValidator()],
      updateOn: 'change'
    })
  });

  // VALIDATOR ASÍNCRON
  codiDisponibleValidator(): AsyncValidatorFn {
    return (control: AbstractControl) => {

      const value = control.value;

      if (!value || value.length < 2) {
        return of(null);
      }

      this.loading = true;

      return timer(500).pipe(
        switchMap(() =>
          this.http.get<any[]>(
            `${environment.apiUrl}/elements?nom_like=${value}`
          )
        ),
        map(result => {
          this.loading = false;
          return result.length === 0 ? { sensResultats: true } : null;
        }),
        catchError(() => {
          this.loading = false;
          return of(null);
        })
      );
    };
  }

  // NETEJAR
  netejar(): void {
    this.form.reset();
    this.cercaCanviada.emit('');
  }
}