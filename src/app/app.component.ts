import { Component } from '@angular/core';
import { DADES_MOCK } from './mocks/dades-mock';
import { Element } from './models/element.model';
import { LlistaElementsComponent } from './components/llista-elements/llista-elements.component';
import { BarraCercaComponent } from './components/barra-cerca/barra-cerca.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LlistaElementsComponent, BarraCercaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  elements: Element[] = DADES_MOCK;
  elementsFiltrats: Element[] = DADES_MOCK;

  onCerca(text: string) {

    if (!text || text.trim() === ''){
      this.elementsFiltrats = this.elements;
     return;
    }

    this.elementsFiltrats = this.elements.filter(e =>
      e.nom.toLowerCase().includes(text.toLowerCase())
    );
  }

  constructor() {
    console.log("Dades mock carregades correctament");
  }
}
