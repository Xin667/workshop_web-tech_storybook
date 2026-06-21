import { createBadge } from './Badge';

export default {
  title: 'Meine Komponenten/Badge',
  tags: ['autodocs'],
  render: (args) => createBadge(args),
  argTypes: {
    label: { control: 'text' },
    color: {
      control: { type: 'select' },
      options: ['green', 'red', 'grey'],
    },
  },
};

export const Grün = {
  args: { label: 'Verfügbar', color: 'green' },
};

export const Rot = {
  args: { label: 'Ausverkauft', color: 'red' },
};

export const Grau = {
  args: { label: 'Inaktiv', color: 'grey' },
};
