# Bonus – Weitere Features

Sechs zusätzliche Storybook-Features, kurz erklärt. Der Code dazu liegt
fertig im Repo unter `stories/bonus/` – einfach öffnen und ausprobieren.

## 1. Actions Panel

Öffnet die Story `Button → Primary` und klickt auf den Button im
Vorschaubereich. Im Tab **Actions** (neben Controls) erscheint ein
Log-Eintrag. Das kommt von `args: { onClick: fn() }` in `Button.stories.js` –
`fn()` markiert die Funktion als „beobachtbar", jeder Aufruf wird protokolliert.

## 2. Backgrounds

Werkzeugleiste oben → Farbpalette-Symbol → Hintergrund wechseln.
Praktisch, um zu prüfen, ob eine Komponente auch auf dunklem oder
farbigem Hintergrund noch lesbar ist. Kein Code nötig.

## 3. Viewport

Werkzeugleiste oben → Handysymbol → verschiedene Bildschirmgrößen
simulieren (Mobile, Tablet, Desktop). Kein Code nötig.

## 4. Decorators

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

## 5. Interactions Addon

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

## 6. MDX Docs

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