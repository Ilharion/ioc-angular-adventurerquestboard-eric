# Models i Adaptadors

Aquest document descriu el mapeig entre l'estructura de l'Api i el model intern utilitzat a l'aplicació Angular

## Mapeig de camps

| Camp API       | Camp Model Intern | Tipus       |
|----------------|-------------------|-------------|
| id             | id                | string      |
| nom            | titol             | string      |
| descripcio     | descripcio        | string      |
| recompensa     | preu              | string      |
| popular        | esPopular         | boolean     |
| rank           | categoria         | string      |
| imatge         | imatgeUrl         | string      |
| stock          | unitats           | number      |

## Transformació de dades

L'aplicació utilitza un adaptador per transformar les dades de l'Api al model intern, per tal de desacoblar l'estructura de l'API de la lògica de l'app.

## Decisions de disseny

S'ha optat per mantenir els camps de l'Api separats del model inter per garantir una logica apropiada de la idea del projecte.

Camps com imatge o stocks, s'han mapejat, pero no es mostren perque no s'utilitzen en la idea de la aplicació. 