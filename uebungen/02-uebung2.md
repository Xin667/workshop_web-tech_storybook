# Workshop: Storybook — Praxisteil

## Übung 2 – Neuen Parameter hinzufügen (20 Min.)

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

### Reflexion
Ihr habt nur 2-3 Stories geschrieben, aber `size` (3
Werte) × `dark` (2 Werte) × `highlighted` (2 Werte) ergibt theoretisch
3 × 2 × 2 = 12 mögliche Zustände dieser einen Komponente. Stories
zeigen nie alle möglichen Zustände – nur die, die euch wichtig genug
sind, um sie immer im Blick zu haben.

---