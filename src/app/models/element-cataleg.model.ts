export interface ElementCataleg {
  id: string;
  titol: string;
  descripcio: string;
  categoria?: string;
  preu: number;
  imatgeUrl?: string;
  esPopular: boolean;
  unitats?: number;
}