import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ElementService } from './services/element.service';
import { BarraCercaComponent } from './components/barra-cerca/barra-cerca.component';
import { LlistaElementsComponent } from './components/llista-elements/llista-elements.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, BarraCercaComponent, LlistaElementsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ioc-angular-adventurerquestboard-eric';

  constructor(public elementService: ElementService) {}

  ngOnInit() {
    this.elementService.obtenirPopulars();
  }

  // 👇 getters correctes
  get carregant() {
    return this.elementService.carregant();
  }

  get error() {
    return this.elementService.error();
  }

  get elements() {
    return this.elementService.elements();
  }

  carregarPopulars() {
    this.elementService.obtenirPopulars();
  }

  cercar(text: string) {
    this.elementService.cercar(text);
  }
}