---
marp: true
theme: default
paginate: true
size: 16:9
lang: de
---

<!-- _class: lead -->

# Workshop: Storybook
## UI-Komponenten isoliert entwickeln und dokumentieren

**Dienstag, 23. Juni 2026 · 14:30 Uhr · Raum 3.215**
**Dongxin Wang**

---

## Was euch heute erwartet

**Lernziele:** Am Ende könnt ihr 
- eine eigene UI-Komponente in Storybook anlegen
- wissen, wie ihr KI-generierten Code in ein bestehendes Komponentenmuster überführt
- verstehen, warum Storybook gerade im KI-Zeitalter als Qualitätssicherung dient.

---

## Unsere Reiseroute

| Phase | Inhalt | Dauer (ca.) |
|---|---|---|
| 1 | Warum Storybook? + Kernkonzepte | 25 Min. |
| 2 | Setup | 5 Min. |
| 3 | Übung 1 – Eigene Card-Komponente bauen | 30 Min. |
| 4 | Übung 2 – Neuen Parameter hinzufügen | 20 Min. |
| 5 | Übung 3 – KI und Storybook | 20 Min. |
| 6 | Bonus (optional, im eigenen Tempo) | – |
| 7 | Abschluss & Ausblick | 10 Min. |


---

## Das Problem

Stellt euch vor, ihr baut einen Button. Er soll in drei Zuständen
funktionieren: normal, deaktiviert und mit Ladeanimation.

**Ohne Storybook:**
1. Gesamte App starten
2. Einloggen
3. Zur richtigen Seite navigieren
4. Den Button in den richtigen Zustand bringen
5. Etwas ändern → von vorne anfangen

**Persönliche Motivation**

---

## Das Problem – die Alternative

**Mit Storybook:**
Alle Zustände sind gleichzeitig sichtbar. 

---

## Was ist Storybook?

Storybook ist eine **eigenständige Entwicklungsumgebung für UI-Komponenten**.
Sie läuft parallel zu eurer App, auf Localhost.

```
Storybook  =  Ausstellungsraum für Komponenten
              (jede Komponente in allen Zuständen, sofort sichtbar)

Echte App  =  Die fertige Website, wo die Komponenten zusammengebaut werden
```

Storybook ersetzt keine App – es ist der Ort, an dem Komponenten **entstehen und geprüft werden**, bevor sie in die App wandern.

---

## Wie grenzt sich das ab?

Storybook ist nicht die einzige Lösung für isolierte
Komponentenentwicklung. Andere Tools:
- **Ladle, Histoire** (Storybook is leichter)
- **Figma** zeigt Komponenten als Bild, nicht als laufenden Code.

**Was wir heute machen:** 
- Wir bauen mit JavaScript, keine React- oder Vue-Integration. 
- Visual-Regression-Testing und das Interactions-Addon zeigen wir nur kurz im Bonus-Teil, nicht vertieft. 
- Storybook als Deployment-Ziel sprechen wir nur im Ausblick an.

---

## Kernkonzepte: Was ist eine Komponente? (Wiederholung)

Ein **wiederverwendbares UI-Stück** – einmal bauen, überall einsetzen.

```
Button, Card, Eingabefeld, Navigationsleiste, Modal, Badge ...
```

Eine Komponente besteht immer aus drei Teilen:

| Datei | Aufgabe | Beispiel |
|---|---|---|
| `Card.js` | Logik: Was wird gebaut, wie reagiert es auf Parameter | `if (dark) → dunkles CSS` |
| `card.css` | Aussehen: Farben, Abstände, Formen | `.card--dark { background: #1e1e2e }` |
| `Card.stories.js` | Storybook: Welche Zustände sollen gezeigt werden | `export const Dunkel = { args: { dark: true } }` |

---

## Kernkonzepte: Was ist eine Story?

Eine Story ist ein **definierter Zustand einer Komponente**.

```
Card (Komponente)
 ├── Standard      → size: medium, dark: false
 ├── Dunkel        → dark: true
 ├── Groß          → size: large
 └── Hervorgehoben → highlighted: true
```

Stories sind keine Tests – sie sind **lebende Dokumentation**.
Sie zeigen dem Team, was eine Komponente kann.

---

## Kernkonzepte: Wo kommen Parameter in der echten App her?

In Storybook stellt ihr Parameter manuell ein. In der echten App kommen
sie aus drei Quellen:

```js
// 1. Vom Entwickler festgelegt (feste Werte im Code)
createCard({ size: 'large', title: 'Empfohlen' });

// 2. Aus der Datenbank / einem Server
fetch('/api/produkt/42').then(data => {
  createCard({
    title: data.name,
    highlighted: data.istImAngebot,  // true wenn Rabatt, sonst false
  });
});

// 3. Durch Nutzeraktion ausgelöst
button.addEventListener('click', () => {
  createCard({ highlighted: true });
});
```

---

## Storybook im KI-Zeitalter

KI-Tools können Komponenten in Sekunden generieren. Aber: **Wie prüft ihr, ob alle Zustände korrekt aussehen?**

```
KI generiert Komponente
          ↓
Storybook zeigt alle Zustände → ihr prüft, ob alles stimmt
          ↓
Storybook dient als Dokumentation für das Team
          ↓
Komponente wird in die echte App eingebaut
```

Storybook ist die Qualitätssicherung für KI-generierten Code. (Human in the loop!)

---

<!-- _class: lead -->

# Übung. Jetzt geht's los

Setup, Lesebeispiel und alle drei Übungen findet ihr in der `uebungen.md` im Repo.

---

<!-- _class: lead -->

# Abschluss & Ausblick

---

## Was wir heute gemacht haben

Wir sind von der Frage "Wie testet man drei Button-Zustände, ohne die ganze App zu starten?" 
-> einer eigenen Card-Komponente mit mehreren kombinierbaren Parametern gekommen 
-> haben gesehen, dass dieselbe Logik gilt, egal ob der Code von euch oder von einer KI stammt.

---

## Was war daran schwierig?

1. Das Übertragen eines Musters (`dark` → `highlighted`) auf einen neuen Fall, 
2. Das Einschätzen, ob KI-generierter Code zu eurem Projekt passt oder erst angepasst werden muss.
3. ...

-> Genau das ist die Fähigkeit, die im Entwickleralltag zählt – nicht das
Schreiben von Code an sich.

---

## Wo geht's weiter?

- **Interactions Addon** lässt sich zu echten automatisierten Tests
  ausbauen
- **Visual Regression Testing** (z. B. Chromatic) erkennt automatisch,
  wenn sich das Aussehen einer Komponente ungewollt ändert
- Storybook lässt sich als statische Seite **deployen**, viele Teams
  nutzen es als lebende Design-System-Doku fürs ganze Unternehmen

---

<!-- _class: lead -->

## Danke!