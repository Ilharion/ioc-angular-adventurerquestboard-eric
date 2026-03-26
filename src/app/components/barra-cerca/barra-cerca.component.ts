import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-barra-cerca',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './barra-cerca.component.html',
  styleUrl: './barra-cerca.component.scss'
})
export class BarraCercaComponent {

  @Output() cercacanviada = new EventEmitter<string>();

  textCerca: string = '';

  onSubmit(){
    this.cercacanviada.emit(this.textCerca);
  }
 
}
