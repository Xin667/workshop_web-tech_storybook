import './badge.css';

export const createBadge = ({
  label = 'Neu',
  color = 'green',
}) => {
  const badge = document.createElement('span');

  const colorClass = `badge--${color}`;

  badge.className = ['badge', colorClass].join(' ').trim();
  badge.innerText = label;

  return badge;
};
