# Navegació de l'aplicació (Routing) #

Aquest document descriu la configuració del sistema de rutes de l'aplicació Angular i la seva estructura de navegació.

# Configuració general #

El sisteme de rutes s'ha configurat a traves de 'app.routes.ts' i registrat a l'aplicació mitjançant 'provideRouter(routes)' dins de 'app.config.ts'.

## provideRouter

S'utilitza per registrar totes les rutes de l'aplicació a nivell global.

    - Permet la navegació sense recarrega de pàgina.
    - Gestiona la resolució de components segons la URL

## RouterOulet

S'ha afegit <router-oulet></router-outlet> al AppComponent.
Aixo permet:
    - Renderitzar dinamicament el component actiu segons la ruta
    - Actuar com a contenidor principal de vistes

## RouterLink

S'utilitza routerLink als elements de navegació per canviar de ruta sense recarregar la pagina.

