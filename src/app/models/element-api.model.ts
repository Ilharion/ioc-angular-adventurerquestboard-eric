export interface ElementApiResponse {
  id: string;
  nom: string;
  descripcio: string;
  rank: string;
  recompensa: number;
  imatge?: string;
  popular: boolean;
  stock?: number;
}