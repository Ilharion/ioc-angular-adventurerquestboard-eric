import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Element } from '../models/element.model';

@Injectable({
  providedIn: 'root'
})
export class ElementService {

  private apiUrl = environment.apiUrl;

  // SIGNALS
  elements = signal<Element[]>([]);
  carregant = signal<boolean>(false);
  error = signal<string | null>(null);

  constructor(private http: HttpClient) {}

  // OBTENIR POPULARS

 obtenirPopulars(): void {
  this.carregant.set(true);
  this.error.set(null);

  this.http.get<Element[]>(`${this.apiUrl}/elements`)
    .subscribe({
      next: (data) => {
        const populars = data.filter(e => e.popular === true);
        this.elements.set(populars);
        this.carregant.set(false);
      },
      error: () => {
        this.error.set("Error carregant les missions populars");
        this.carregant.set(false);
      }
    });
}

 
  // CERCA PER NOM

  cercar(terme: string): void {
    this.carregant.set(true);
    this.error.set(null);

    this.http.get<Element[]>(`${this.apiUrl}/elements`)
      .subscribe({
        next: (data) => {
          const filtrats = data.filter(e =>
          e.nom.toLowerCase().includes(terme.toLowerCase())
        );

        this.elements.set(filtrats);
        this.carregant.set(false);
      },
      error: () => {
        this.error.set("Error en la cerca de missions");
        this.carregant.set(false);
      }
    });
  }
}