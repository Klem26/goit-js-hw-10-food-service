import menuItem from '../menu.json'
import menuCards from '../template/menu-cards.hbs'

const menuMarkup = menuCards(menuItem)

const menuListItemRef = document.querySelector('.js-menu')
menuListItemRef.insertAdjacentHTML('beforeend', menuMarkup )