import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementService } from '../../services/element.service';
import { PreferitsPanelComponent } from '../../components/preferits-panel/preferits-panel.component';
import { FormulariCercaComponent } from '../../components/formulari-cerca/formulari-cerca.component';
import { LlistaElementsComponent } from '../../components/llista-elements/llista-elements.component';

@Component({
  selector: 'app-cataleg-page',
  standalone: true,
  imports: [
    CommonModule,
    PreferitsPanelComponent,
    FormulariCercaComponent,
    LlistaElementsComponent
  ],
  templateUrl: './cataleg-page.component.html',
  styleUrl: './cataleg-page.component.scss'
})
export class CatalegPageComponent {

  constructor(public elementService: ElementService) {}

  ngOnInit() {
    this.elementService.obtenirPopulars();
  }

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

  onCerca(terme: string): void {
    this.elementService.cercar(terme);
  }

}