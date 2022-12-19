import './thirdpage.css';
import { Api } from "../../components/Api.js";
import { SectionCards } from "../../components/SectionCards.js";
import { validationConfig } from "../../components/Constants.js";
import {Cards} from '../../components/Cards.js';

// Получаем данные с источника
const api = new Api({
    urlJson: 'http://localhost:3000',
    headers: {
      'Content-Type': 'application/json',
    }
  });
// Перебираем данные
  Promise.all([
    api.getUsers(),
  ]).then(([cards]) => {
    cardsList.renderItems(cards);
    
  }).catch(err => {
    console.log(`Error: ${err}`);
  })

// Добавляем данные в template
  const createCard = (item) => {
    const card = new Cards(
      item,
      '.element-template')
    return card.renderCard();
  }
// Выводим их на страницу
  const cardsList = new SectionCards({
    renderer: (item) => {
      cardsList.addItem(createCard(item));
    },
  }, validationConfig.container);
