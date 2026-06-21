import { createCard } from './Card';

export default {
  title: 'Meine Komponenten/Card',
  tags: ['autodocs'],
  render: (args) => createCard(args),
  argTypes: {
    title:       { control: 'text' },
    body:        { control: 'text' },
    buttonLabel: { control: 'text' },
    dark:        { control: 'boolean' },
    highlighted: { control: 'boolean' },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  },
};

export const Standard = {
  args: {
    title: 'Kartentitel',
    body: 'Eine kurze Beschreibung der Karte.',
    buttonLabel: 'Mehr erfahren',
    dark: false,
  },
};

export const Dunkel = {
  args: {
    title: 'Dunkler Modus',
    body: 'Diese Karte nutzt das dunkle Farbschema.',
    buttonLabel: 'Mehr erfahren',
    dark: true,
  },
};

export const Groß = {
  args: {
    title: 'Große Karte',
    body: 'Diese Karte nutzt die große Größe.',
    buttonLabel: 'Mehr erfahren',
    dark: false,
    size: 'large',
  },
};

export const Hervorgehoben = {
  args: {
    title: 'Hervorgehobene Karte',
    body: 'Diese Karte hat einen blauen Rahmen.',
    buttonLabel: 'Mehr erfahren',
    highlighted: true,
  },
};

// Schritt 4 ist reine Controls-Panel-Exploration (Kombinationen aus
// size/dark/highlighted ausprobieren) – dafür wird keine eigene Story
// gebraucht, das passiert live in der Storybook-UI.
