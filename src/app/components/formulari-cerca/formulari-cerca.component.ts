import { Component, EventEmitter, Output, OnInit } from '@angular/core';
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
export class FormulariCercaComponent implements OnInit {

  @Output() cercaCanviada = new EventEmitter<string>();

  loading = false;

  constructor(private http: HttpClient) {}

  form = new FormGroup({
    termeCerca: new FormControl('', {
      validators: [
        Validators.minLength(2),
        Validators.maxLength(50)
      ],
      asyncValidators: [],
      updateOn: 'change'
    })
  });

  ngOnInit(): void {

    this.form.get('termeCerca')?.setAsyncValidators(
      this.codiDisponibleValidator()
    );

    this.form.get('termeCerca')?.updateValueAndValidity();
    this.form.get('termeCerca')!.valueChanges
      .pipe(debounceTime(400))
      .subscribe(value => {
         
         const text = value || '';

        if (text.length >= 2) {
          this.cercaCanviada.emit(text);
        }

        if (text.length === 0) {
          this.cercaCanviada.emit('');
        }

      });
  }

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

  netejar(): void {
    this.form.reset();
    this.cercaCanviada.emit('');
  }
}