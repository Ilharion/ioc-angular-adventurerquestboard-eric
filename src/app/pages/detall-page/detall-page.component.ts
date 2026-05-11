import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ElementService } from '../../services/element.service';
import { ElementCataleg } from '../../models/element-cataleg.model';
import { TargetaElementComponent } from '../../components/targeta-element/targeta-element.component';

@Component({
  selector: 'app-detall-page',
  standalone: true,
  imports: [CommonModule, TargetaElementComponent],
  templateUrl: './detall-page.component.html'
})
export class DetallPageComponent {

  element?: ElementCataleg;

  constructor(
    private route: ActivatedRoute,
    private elementService: ElementService
  ) {

    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.elementService.obtenirPerId(id)
        .subscribe(data => {
          console.log('ELEMENT DETALL:', data);
          this.element = data;
        });
    }
  }
}