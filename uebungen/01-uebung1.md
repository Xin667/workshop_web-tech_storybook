# Workshop: Storybook — Praxisteil

## Übung 1 – Button.js lesen & eigene Card bauen (30 Min.)

### Teil A – Button.js lesen (10 Min.)

Öffnet `stories/Button.js` und `stories/Button.stories.js`. Lest beide Dateien
in Ruhe durch. Hier eine Lesehilfe, falls ihr nicht wisst, wo ihr anfangen sollt:

**In `Button.js`:**
- `createButton` ist eine Funktion. Sie nimmt ein Objekt mit Parametern
  entgegen (z. B. `primary`, `size`, `label`) und gibt am Ende ein
  fertiges `<button>`-Element zurück.
- Steht hinter einem Parameter ein Gleichheitszeichen mit einem Wert
  (z. B. `primary = false`), ist das ein **Standardwert** – er wird
  verwendet, wenn beim Aufruf nichts übergeben wird.
- Der Kern der Funktion läuft in vier Schritten ab:
  1. Ein leeres `<button>`-Element wird erzeugt (`document.createElement`).
  2. Text und Klick-Verhalten werden gesetzt (`innerText`, `addEventListener`).
  3. Je nach `primary`-Wert wird einer von zwei CSS-Klassennamen gewählt
     (`mode`), und zusammen mit der Größe (`size`) zu einer Liste von
     Klassennamen zusammengesetzt.
  4. Die Liste wird mit `.join(' ')` zu einem einzigen String verbunden
     und dem Button als `className` zugewiesen – das entscheidet, wie
     er aussieht (Farbe, Größe).
- Am Ende wird das fertige Element mit `return` zurückgegeben.

**In `Button.stories.js`:**
- `export default { ... }` enthält die Einstellungen, die für **alle**
  Stories dieser Datei gelten: `title` (Pfad in der Sidebar), `render`
  (wie wird die Komponente erzeugt), `argTypes` (welche Controls
  erscheinen unten im Panel).
- Jedes `export const Name = { args: {...} }` ist **eine** Story –
  ein konkreter Zustand mit konkreten Werten.

**Zum Mitdenken (kurz mit Tischnachbarn besprechen):**
Was passiert, wenn eine Story keinen Wert für `primary` angibt?
Welche Zeile in `Button.js` greift dann?

#### Kurzer Recap

### Teil B – Eigene Card bauen (20 Min.)

**Aufgabe:** Jetzt baut ihr nach genau diesem Muster eine eigene Card-Komponente.

**Schritt 1 –** Legt drei neue Dateien in `storybook-workshop/stories/` an: `card.css`, `Card.js`, `Card.stories.js` und füllt die Lücken im Code. 

*(Orientiert euch an Button.xx)*

**`card.css`(Keine Lücke):**

```css
.card {
  border-radius: 12px;
  padding: 24px;
  width: 280px;
  font-family: sans-serif;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  background: white;
}

.card__title {
  font-size: 18px;
  font-weight: bold;
  margin: 0 0 8px 0;
  color: #111;
}

.card__body {
  font-size: 14px;
  color: #555;
  margin: 0 0 16px 0;
  line-height: 1.6;
}

.card__button {
  padding: 8px 16px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  background: #4A90E2;
  color: white;
}

.card--small { width: 200px; padding: 16px; }
.card--large { width: 380px; padding: 32px; }

.card--dark { background: #1e1e2e; }
.card--dark .card__title { color: #fff; }
.card--dark .card__body  { color: #aaa; }
```

**`Card.js`:** Füllt die Lücken (`???`). Jede Lücke hat einen Hinweis dabei.

```js
import './card.css';

export const createCard = ({
  title = ???,        // Hinweis: irgendein Text in Anführungszeichen, z. B. 'Kartentitel'
  body = ???,         // Hinweis: auch ein Text in Anführungszeichen
  buttonLabel = ???,  // Hinweis: auch ein Text in Anführungszeichen
  size = ???,         // Hinweis: muss zu den Optionen 'small' | 'medium' | 'large' passen
  dark = ???,         // Hinweis: true oder false – OHNE Anführungszeichen (kein Text, ein Boolean!)
}) => {
  const card = document.???(???);
  // Hinweis: dieselbe Methode wie in Button.js, um ein neues Element zu
  // erzeugen. Welches HTML-Element soll eine Card sein? ('div')

  const sizeClass  = `card--${size}`;
  const themeClass = ??? ? 'card--dark' : '';
  // Hinweis: welcher der Parameter von oben ist true/false?

  card.className = [???, ???, ???].join(' ').trim();
  // Hinweis: Reihenfolge wie in Button.js: Grundklasse 'card', dann
  // sizeClass, dann themeClass

  card.??? = `
    <p class="card__title">${???}</p>
    <p class="card__body">${???}</p>
    <button class="card__button">${???}</button>
  `;
  // Hinweis: Wir setzen hier mehrere HTML-Tags auf einmal ein – nicht
  // innerText (das kann nur reinen Text), sondern eine Eigenschaft, die
  // ganzes HTML als String akzeptiert

  return card;
};
```

**Wortliste, falls ihr stecken bleibt:** `createElement`, `'div'`,
`innerHTML`, `title`, `body`, `buttonLabel`, `dark`, `'card'`

**`Card.stories.js`:** Auch hier Lücken füllen – schaut bei Unsicherheit
in `Button.stories.js` nach, das Muster ist gleich.

```js
import { createCard } from './Card';

export default {
  title: ???,                  // Hinweis: ein Pfad in Anführungszeichen,
                                // z. B. 'Meine Komponenten/Card' – frei wählbar
  tags: ['autodocs'],
  render: (args) => ???,       // Hinweis: ruft die Funktion aus Card.js auf,
                                // mit args als Parameter
  argTypes: {
    title:       { control: ??? },  // Hinweis: schaut bei 'label' in Button.stories.js
    body:        { control: 'text' },
    buttonLabel: { control: 'text' },
    dark:        { control: ??? },  // Hinweis: schaut bei 'primary' in Button.stories.js
    size: {
      control: { type: 'select' },
      options: [???, ???, ???],     // Hinweis: die drei Werte, die size in Card.js annehmen kann
    },
  },
};

export const Standard = {
  args: {
    title: ???,         // wählt selbst einen Titel
    body: ???,
    buttonLabel: ???,
    dark: ???,           // Hinweis: Standard-Karte ist nicht dunkel
    // size fehlt hier bewusst → es wird der Standardwert aus Card.js verwendet
  },
};

export const Dunkel = {
  args: {
    title: ???,
    body: ???,
    buttonLabel: ???,
    dark: ???,           // Hinweis: dieser Wert muss true sein, damit die Karte dunkel wird
  },
};
```

**Speichern → Storybook aktualisiert sich automatisch.**
Ihr solltet links „Meine Komponenten → Card" mit zwei Stories sehen.

*Nicht weitergekommen? Komplette Lösung liegt in `solutions/uebung1-card/`.*


**Schritt 2 –** Ändert den Standardwert von `size` in `Card.js` auf `'large'`.
   Was ändert sich in der Story „Standard", obwohl sie `size` gar nicht
   explizit setzt?


**Schritt 3 –** Ändert in der Story „Dunkel" den Wert von `dark` auf `false`.
   Was passiert mit der Vorschau?

**Schritt 4 –** Fügt eine dritte Story namens `Groß` hinzu, mit `size: 'large'`
   (orientiert euch an „Standard").

#### Kurzer Recap

#### Exkurs – Wo lebt der Zustand?

Ändert jetzt den `title` direkt im Controls-Panel (unten im Storybook-UI),
nicht im Code. Drückt danach F5 (Seite neu laden).

| Wo geändert? | Sichtbar nach Neuladen? | Dauerhaft im Projekt? |
|---|---|---|
| Controls-Panel | ❌ | ❌ |
| Code (`.stories.js`) | ✅ (Hot Reload) | ✅ |

**Kernidee:** Das Controls-Panel ist zum **Ausprobieren** da – nichts
geht „kaputt", aber nichts wird gespeichert. Storybooks **Hot Module
Reload** erkennt Codeänderungen automatisch und aktualisiert die
Vorschau ohne manuelles Neuladen.

---

