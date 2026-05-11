# Adventurer Quest Board

Aplicació Angular per gestionar missions, preferits i cerca d’elements d’un món RPG.

---

##  Rutes

| Path | Component | Accés |
|------|----------|------|
| /cataleg | Catàleg | Públic |
| /cerca | Cerca | Públic |
| /detall/:id | Detall | Públic |
| /preferits | Preferits | Privat |
| /login | Login | Públic |

---

##  Execució

```bash
git clone <repositori>
cd ioc-angular-adventurerquestboard-eric
npm install
ng serve

url: http://localhost:4200
```

---

## Build producció

```bash
ng build --configuration production
```
El build genera la carpeta dist/ amb els fitxers optimitzats.

Mida del bundle: ~293 kB (raw) / ~83 kB (transferit)

---

## Credencials de prova

Email: admin@test.com
Password: 1234

---