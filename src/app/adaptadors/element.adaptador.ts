import { ElementApiResponse } from '../models/element-api.model';
import { ElementCataleg } from '../models/element-cataleg.model';

export function adaptarElementApi(api: ElementApiResponse): ElementCataleg {
  return {
    id: api.id,
    titol: api.nom,
    descripcio: api.descripcio,
    categoria: api.categoria,
    preu: api.recompensa,
    imatgeUrl: api.imatge,
    esPopular: api.popular,
    unitats: api.stock
  };
}

export function adaptarElementsApi(apiList: ElementApiResponse[]): ElementCataleg[] {
  return apiList.map(adaptarElementApi);
}