import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../serveis/auth.service';
import { Observable } from 'rxjs';
import { Usuari } from '../../serveis/auth.service';

@Component({
  selector: 'app-navegacio',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './navegacio.component.html'
})
export class NavegacioComponent {

  usuari!: Observable<Usuari | null>;

  constructor(public authService: AuthService) {
    this.usuari = this.authService.obtenirUsuari();
  }

  logout() {
    this.authService.logout();
  }
}