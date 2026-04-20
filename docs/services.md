# Serveis de l'aplicació

Aquest document descriu els serveis de l'aplicació Angular, encarregats de la gestió de dades, comunicació HTTP i persistencia de dades.

## Servei d'elements (ElementService)

El servei 'ElementService' es responsable de gestionar la comunicació amb l'API i mantenir l'estat globals dels elementes del cataleg.

### Responsabilitats principals

-Obtenir elements inicials del cataleg.
-Realitzar cerques filtrades
-Gestionar estats de càrrega i error

## Mètodes principals

### 'ObtenirPopulars()'

Carrega els elements inicials del catàleg

### 'cercar(terme:string)'

Realitza una cerca d'elements segons el text introduït

## Estat reactiu

El servei utilitza signals per gestinar l'estat de l'aplicació

## Servei de preferits (PreferitsService)

El servei 'PreferitsService gestiona els elements marcats com a favorits i la seva persistencia.

## Gestió de notes

El servei també gestiona un sistema de notes asosiada a cada element preferit.
Cada modificació actualitza el signal i es persisteix a 'localStorage'

## Decisions de disseny

S'ha utilitzat signals per garantir la reactivitat en la UI i actualitzacions automatiques.

La persistencia amb 'localStorage' permet mantenir els preferits entre sessions del navegador
