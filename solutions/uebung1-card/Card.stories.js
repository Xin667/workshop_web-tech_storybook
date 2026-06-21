// Hinweis: Diese Datei zeigt den Stand NACH Schritt 4 (drei Stories).
// Schritt 2 ("size"-Standardwert auf 'large' ändern) und Schritt 3
// ("dark" in der Story "Dunkel" auf false setzen) sind bewusste
// Experimente, um Standardwerte zu verstehen — sie sind keine
// dauerhaften Änderungen, deshalb tauchen sie hier nicht mehr auf.

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
    // size fehlt hier bewusst → es wird der Standardwert aus Card.js verwendet
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
