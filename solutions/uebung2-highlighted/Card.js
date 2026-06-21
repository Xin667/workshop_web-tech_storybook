import './card.css';

export const createCard = ({
  title = 'Kartentitel',
  body = 'Eine kurze Beschreibung der Karte.',
  buttonLabel = 'Mehr erfahren',
  size = 'medium',
  dark = false,
  highlighted = false,
}) => {
  const card = document.createElement('div');

  const sizeClass = `card--${size}`;
  const themeClass = dark ? 'card--dark' : '';
  const highlightedClass = highlighted ? 'card--highlighted' : '';

  card.className = ['card', sizeClass, themeClass, highlightedClass]
    .join(' ')
    .trim();

  card.innerHTML = `
    <p class="card__title">${title}</p>
    <p class="card__body">${body}</p>
    <button class="card__button">${buttonLabel}</button>
  `;

  return card;
};
