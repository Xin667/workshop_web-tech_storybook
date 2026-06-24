# Workshop: Storybook — Praxisteil

## Übung 3 – KI und Storybook (20 Min.)

**Schritt 1 – Komponente generieren (5 Min.)**

Gebt folgenden Prompt bei KI-Tool ein:

> „Erstelle eine Badge-Komponente in JavaScript. Eine Badge ist ein
> kleines Label mit Text und einer Farbvariante (grün, rot, grau)."

Speichert den generierten Code als `Badge.js` in `stories/`.

**Schritt 2 – Mit dem eigenen Muster vergleichen (5 Min.)**

Vergleicht den generierten Code mit eurer `Card.js`. Beantwortet:

- Verwendet die KI Inline-Styles (`element.style...`) oder CSS-Klassen
  (`className`)? Gibt es überhaupt eine eigene CSS-Datei?
- Gibt es eine `.stories.js`-Datei dazu?

Diese Fragen sind kein Zufall – genau sie entscheiden, ob ihr den
Code so wie er ist in Storybook benutzen könnt, oder ob ihr ihn erst
anpassen müsst.

**Schritt 3 – Selbst anpassen (5 Min.)**

Passt `Badge.js` so an, dass es zu eurem Muster passt: Objekt-Parameter
statt einzelner Parameter, CSS-Klassen statt Inline-Styles (orientiert
euch an `Card.js`). Schreibt anschließend selbst eine `Badge.stories.js`
nach dem Muster von `Card.stories.js`, mit mindestens drei Stories
(eine pro Farbe).

📁 **Musterlösung:** `solutions/uebung3-badge/`

**Schritt 4 – Diskussion (5 Min.)**

- Was hätte im Prompt gefehlt, damit sie es täte – und wäre das jeden Aufwand wert gewesen, oder war die manuelle Anpassung schneller?
- Wo hilft KI bei der Komponentenentwicklung, wo nicht?
- Ist Storybook durch KI weniger wichtig geworden – oder wichtiger?
---