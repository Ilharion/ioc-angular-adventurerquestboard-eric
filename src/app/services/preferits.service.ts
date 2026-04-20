import { Injectable, signal, computed } from '@angular/core';
import { ElementCataleg } from '../models/element-cataleg.model';

@Injectable({
  providedIn: 'root'
})
export class PreferitsService {

  private readonly STORAGE_KEY = 'preferits-cataleg';

  preferits = signal<ElementCataleg[]>([]);

  totalPreferits = computed(() => this.preferits().length);

  constructor() {
    this.carregarPreferits();
  }

  private carregarPreferits(): void {
    try {
      const dades = localStorage.getItem(this.STORAGE_KEY);
      if (dades) {
        this.preferits.set(JSON.parse(dades));
      }
    } catch (error) {
      console.error('Error carregant preferits');
    }
  }

  private guardarPreferits(): void {
    try {

      localStorage.setItem(
        this.STORAGE_KEY,
        JSON.stringify(this.preferits())
      );
    } catch (error) {
      console.error('Error guardant preferits');
    }
  }

  afegirPreferit(element: ElementCataleg): void {
    if (!this.esPreferit(element.id)) {
      this.preferits.update(llista => [...llista, element]);
      this.guardarPreferits();
    }
  }

  eliminarPreferit(id: string): void {
    this.preferits.update(llista =>
      llista.filter(e => String(e.id)  !== String(id))
    );
    this.guardarPreferits();
  }

  esPreferit(id: string): boolean {
    return this.preferits().some(e => String(e.id) === String(id));
  }

  afegirNota(id: string): void {
  this.preferits.update(llista =>
    llista.map(p =>
      p.id === id
        ? { ...p, notes: [...(p.notes || []), ''] }
        : p
    )
  );

  this.guardarPreferits();
}

  eliminarNota(id: string, index: number): void {
  this.preferits.update(llista =>
    llista.map(p =>
      p.id === id
        ? {
            ...p,
            notes: p.notes?.filter((_, i) => i !== index)
          }
        : p
    )
  );

  this.guardarPreferits();
  }

  actualitzarNota(id: string, index: number, value: string): void {
  this.preferits.update(list =>
    list.map(el =>
      el.id === id
        ? {
            ...el,
            notes: el.notes?.map((n, i) =>
              i === index ? value : n
            )
          }
        : el
    )
  );
  }
}