import cardsItem from '../templates/card.hbs';
import menu from '../menu.json';
const iHaveNoImagination = cardsItem(menu);
document.querySelector('.js-menu').innerHTML = iHaveNoImagination;