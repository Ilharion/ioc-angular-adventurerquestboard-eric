import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ElementService } from './services/element.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ioc-angular-adventurerquestboard-eric';

  constructor(public elementService: ElementService) {}

  ngOnInit(){
    this.elementService.obtenirPopulars();
  }
}
