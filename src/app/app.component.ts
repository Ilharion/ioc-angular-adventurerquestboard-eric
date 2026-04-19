import { Component } from '@angular/core';
<<<<<<< HEAD
import { RouterOutlet } from '@angular/router';
import { ElementService } from './services/element.service';
import { CommonModule } from '@angular/common';
=======
import { DADES_MOCK } from './mocks/dades-mock';
import { Element } from './models/element.model';
import { LlistaElementsComponent } from './components/llista-elements/llista-elements.component';
import { BarraCercaComponent } from './components/barra-cerca/barra-cerca.component';

>>>>>>> ra2-components

@Component({
  selector: 'app-root',
  standalone: true,
<<<<<<< HEAD
  imports: [RouterOutlet, CommonModule],
=======
  imports: [LlistaElementsComponent, BarraCercaComponent],
>>>>>>> ra2-components
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
<<<<<<< HEAD
  title = 'ioc-angular-adventurerquestboard-eric';

  constructor(public elementService: ElementService) {}

  ngOnInit(){
    this.elementService.obtenirPopulars();
=======

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
>>>>>>> ra2-components
  }
}
