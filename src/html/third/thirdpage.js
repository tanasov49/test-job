import './thirdpage.css';
import { Api } from "../../components/Api.js";
import { SectionCards } from "../../components/SectionCards.js";
import { validationConfig } from "../../components/Constants.js";
import {Cards} from '../../components/Cards.js';
const api = new Api({
    urlJson: 'http://localhost:3000',
    headers: {
      'Content-Type': 'application/json',
    }
  });
  Promise.all([
    api.getUsers(),
  ]).then(([cards]) => {
    cardsList.renderItems(cards);
    
  }).catch(err => {
    console.log(`Error: ${err}`);
  })

  // const cardsList = new SectionCards({
  //   renderer: (item) => {
  //     cardsList.addItem(createCard(item));
  //   },
  // }, validationConfig.address);

  const createCard = (item) => {
    const card = new Cards(
      item,
      '.element-template')
    return card.renderCard();
  }
  const cardsList = new SectionCards({
    renderer: (item) => {
      cardsList.addItem(createCard(item));
    },
  }, validationConfig.container);
