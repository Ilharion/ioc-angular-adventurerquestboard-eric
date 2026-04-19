import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

import { ElementApiResponse } from '../models/element-api.model';
import { ElementCataleg } from '../models/element-cataleg.model';
import { adaptarElementsApi } from '../adaptadors/element.adaptador';

@Injectable({
  providedIn: 'root'
})
export class ElementService {

  private apiUrl = environment.apiUrl;

  elements = signal<ElementCataleg[]>([]);
  carregant = signal<boolean>(false);
  error = signal<string | null>(null);

  constructor(private http: HttpClient) {}

  obtenirPopulars(): void {
    this.carregant.set(true);
    this.error.set(null);

    this.http.get<ElementApiResponse[]>(`${this.apiUrl}/elements?popular=true`)
      .subscribe({
        next: (data) => {
          const adaptats = adaptarElementsApi(data);
          this.elements.set(adaptats);
          this.carregant.set(false);
        },
        error: () => {
          this.error.set("Error carregant les missions populars");
          this.carregant.set(false);
        }
      });
  }

  cercar(terme: string): void {
    this.carregant.set(true);
    this.error.set(null);

    this.http.get<ElementApiResponse[]>(`${this.apiUrl}/elements?nom_like=${terme}`)
      .subscribe({
        next: (data) => {
          const adaptats = adaptarElementsApi(data);
          this.elements.set(adaptats);
          this.carregant.set(false);
        },
        error: () => {
          this.error.set("Error en la cerca de missions");
          this.carregant.set(false);
        }
      });
  }
}