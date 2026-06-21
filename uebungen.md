# Workshop: Storybook — Praxisteil

## Setup

```bash
# 1. Node.js prüfen
node -v
npm -v
# Falls nicht installiert: https://nodejs.org (LTS-Version)

# 2. Projekt anlegen
mkdir storybook-workshop
cd storybook-workshop
npm init -y

# 3. Storybook installieren
npx storybook@latest init --type html

npm pkg set type=module

# 5. Storybook starten
npm run storybook
```

### Setup-Hinweise

- Frage nach dem Builder → **Vite** auswählen, Enter
- Rote Kreuze bei `addon-vitest` / `addon-a11y` → ignorieren
- Instalieren "Recommended: Component development, docs, and testing features."
- „Playwright mit Chromium installieren?" → **No** wählen

*(Vite ist hier nur der interne Bundler, den Storybook im Hintergrund nutzt –
ihr müsst ihn nicht konfigurieren oder verstehen, einmal auswählen reicht.
Storybook braucht zwingend einen Bundler; Vite ist davon aktuell die
schlankere, schnellere Option.)*

## Orientierung in der Oberfläche**


## Eure drei Übungen

Jetzt seid ihr dran. Drei Übungen, jede baut auf der vorigen auf.

### Übung 1 – Button.js lesen & eigene Card bauen (30 Min.)

**Teil A – Button.js lesen (10 Min.)**

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

**Teil B – Eigene Card bauen (20 Min.)**

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

### Übung 2 – Neuen Parameter hinzufügen (20 Min.)

**Aufgabe:** Fügt einen `highlighted`-Parameter hinzu.
Effekt: Die Card bekommt einen blauen Rahmen.

**Schritt 1 – CSS ergänzen**

In `card.css` hinzufügen:
```css
.card--highlighted {
  border: 2px solid #4A90E2;
}
```

**Schritt 2 – Nach dem Muster von `dark` vorgehen**

`highlighted` funktioniert
nach **genau demselben Muster** wie der bereits vorhandene Parameter
`dark`. Schaut euch an, wie `dark` in eurer `Card.js` und
`Card.stories.js` verwendet wird, und übertragt das Muster:

| | `dark` (schon vorhanden) | `highlighted` (neu – von euch) |
|---|---|---|
| Parameter mit Standardwert | `dark = false` | ? |
| CSS-Klasse, wenn aktiv | `'card--dark'` | ? |
| Bedingung (ternärer Operator) | `dark ? 'card--dark' : ''` | ? |
| In `argTypes` | `dark: { control: 'boolean' }` | ? |
| In einer Story | `dark: true` | ? |

**Schritt 3 – Neue Story ergänzen**

Fügt in `Card.stories.js` eine neue Story namens `Hervorgehoben` hinzu,
die `highlighted: true` setzt (orientiert euch an der Story „Dunkel").

**Schritt 4 – Parameter im Controls-Panel kombinieren**

Jetzt habt ihr mehrere einstellbare Parameter: `size`, `dark`,
`highlighted`. Öffnet eine beliebige Story und probiert im
Controls-Panel folgende Kombinationen aus – **ohne den Code zu ändern**:

1. `size: large` + `dark: true` + `highlighted: true` gleichzeitig –
   sieht das noch gut aus, oder stören sich Rahmen und Hintergrund?
2. `dark: true` + `highlighted: true` – ist der blaue Rahmen auf dem
   dunklen Hintergrund noch gut erkennbar?
3. Findet die Kombination, die euch optisch am besten gefällt, und
   merkt euch die Werte – die zeigt ihr am Ende der Übung kurz vor.

*Musterlösung: `solutions/uebung2-highlighted/`*

#### Reflexion
Ihr habt nur 2-3 Stories geschrieben, aber `size` (3
Werte) × `dark` (2 Werte) × `highlighted` (2 Werte) ergibt theoretisch
3 × 2 × 2 = 12 mögliche Zustände dieser einen Komponente. Stories
zeigen nie alle möglichen Zustände – nur die, die euch wichtig genug
sind, um sie immer im Blick zu haben.

---

### Übung 3 – KI und Storybook (20 Min.)

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

## Bonus – Weitere Features

Sechs zusätzliche Storybook-Features, kurz erklärt. Der Code dazu liegt
fertig im Repo unter `stories/bonus/` – einfach öffnen und ausprobieren.

### 1. Actions Panel

Öffnet die Story `Button → Primary` und klickt auf den Button im
Vorschaubereich. Im Tab **Actions** (neben Controls) erscheint ein
Log-Eintrag. Das kommt von `args: { onClick: fn() }` in `Button.stories.js` –
`fn()` markiert die Funktion als „beobachtbar", jeder Aufruf wird protokolliert.

### 2. Backgrounds

Werkzeugleiste oben → Farbpalette-Symbol → Hintergrund wechseln.
Praktisch, um zu prüfen, ob eine Komponente auch auf dunklem oder
farbigem Hintergrund noch lesbar ist. Kein Code nötig.

### 3. Viewport

Werkzeugleiste oben → Handysymbol → verschiedene Bildschirmgrößen
simulieren (Mobile, Tablet, Desktop). Kein Code nötig.

### 4. Decorators

Komponenten in eine Umgebung einbetten, ohne die Komponente selbst
zu verändern – z. B. Padding und Hintergrund für die Vorschau:

```js
// stories/bonus/Card.decorator.stories.js
export default {
  decorators: [
    (Story) => {
      const wrapper = document.createElement('div');
      wrapper.style.padding = '40px';
      wrapper.style.background = '#f5f5f5';
      wrapper.appendChild(Story());
      return wrapper;
    },
  ],
};
```

### 5. Interactions Addon

Simuliert Nutzerinteraktionen automatisch (z. B. „Klicke auf den Button
und prüfe, ob `onClick` aufgerufen wurde") – das ist ein einfacher,
automatisierter Test direkt in der Story:

```js
// stories/Card.js
export const createCard = ({
  ...
  onClick = () => {}
})
  ...
  const button = card.querySelector('.card__button');  
  button.addEventListener('click', onClick);             
  return card;
```

```js
// stories/Card.stories.js
import { expect, within, userEvent, fn } from 'storybook/test';   

export const KlickTest = {
  args: {
    buttonLabel: 'Klick mich',
    onClick: fn(),   // erzeugt eine "überwachbare" Funktion
  },
  play: async ({ canvasElement, args }) => {
    const button = within(canvasElement).getByRole('button');
    await userEvent.click(button);
    await expect(args.onClick).toHaveBeenCalled();
  },
};
```

### 6. MDX Docs

Statt der automatisch generierten Docs-Seite (`tags: ['autodocs']`)
könnt ihr eine eigene Dokumentationsseite mit Freitext, Beispielen
und eingebetteten Stories schreiben:

```mdx
// stories/Card.mdx
import { Meta, Story } from '@storybook/addon-docs/blocks';
import * as CardStories from '../Card.stories';

<Meta of={CardStories} />

# Card-Komponente

Die Card wird überall verwendet, wo Inhalte gruppiert dargestellt werden sollen.

<Story of={CardStories.Standard} />
```

---
