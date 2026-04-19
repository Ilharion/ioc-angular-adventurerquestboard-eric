# Formularis Reactius i Validacions

Aquest document descriu la implementació del component `FormulariCercaComponent`, encarregat de gestionar la cerca d'elements mitjançant Angular Reactive Forms.

---

## Estructura del formulari

El formulari conté un únic camp:

- `termeCerca`

Aquest camp està connectat amb un `FormGroup` i un `FormControl`.

---

## Validacions síncrones implementades

S'han aplicat els següents validadors síncrons:

|    Validador   | Descripció  |
|----------------|-------------|
| `minLength(2)` | El text introduït ha de tenir almenys 2 caràcters |
| `maxLength(50)`| El text no pot superar els 50 caràcters |

### Missatges mostrats

- *Mínim 2 caràcters*
- *Màxim 50 caràcters*

Els errors només es mostren quan el camp ha estat tocat per l'usuari (`touched`).

---