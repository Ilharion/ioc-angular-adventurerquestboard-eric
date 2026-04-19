import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-barra-cerca',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './barra-cerca.component.html',
  styleUrl: './barra-cerca.component.scss'
})
export class BarraCercaComponent {

  @Output() cercacanviada = new EventEmitter<string>();

  textCerca: string = '';

  onInputChange(){
    this.cercacanviada.emit(this.textCerca);
  }
 
}
