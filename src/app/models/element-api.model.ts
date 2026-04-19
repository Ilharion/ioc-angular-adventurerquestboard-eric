export interface ElementApiResponse {
  id: string;
  nom: string;
  descripcio: string;
  categoria?: string;
  recompensa: number;
  imatge?: string;
  popular: boolean;
  stock?: number;
}