const popup = document.querySelector('.popup');
const clients = document.querySelector('.clients');
const template = document.querySelector('.template-clients');
const btnAddress = document.querySelector('.main__btn')
const closeBtnAddress = document.querySelector('.address__close');
const addressChose = document.querySelector('.address-chose');
const addressChoseTitle = document.querySelector('.address-chose__title');
const addressChoseSubtitle = document.querySelector('.address-chose__subtitle');
const valuesAddress = [
    {id: 1, city: 'Калининград', street: 'Камская 2б'},
    {id: 2, city: 'Светлый', street: 'Мира 6'},
    {id: 3, city: 'Советск', street: 'Пехотная 22'},
    {id: 4, city: 'Мамоново', street: 'Победы 12'},
    {id: 5, city: 'Калининград', street: 'Мирная 1'},
    {id: 6, city: 'Калининград', street: 'Транспортная 6'},
    {id: 7, city: 'Калининград', street: 'Судостроительная 10'}
]

valuesAddress.forEach(function (value) {
    const listClient = template.content.querySelector('.client').cloneNode(true);
    const cityTitle = document.createElement('p');
    const addressSubtitle = document.createElement('p');
    cityTitle.className = 'client__title';
    addressSubtitle.className = 'client__subtitle';
    cityTitle.textContent = value.city;
    addressSubtitle.textContent = value.street;
    listClient.append(cityTitle, addressSubtitle);
    clients.appendChild(listClient);
    listClient.addEventListener('click', () => {
        addressChoseTitle.textContent = value.city;
        addressChoseSubtitle.textContent = value.street;
        addressChose.append(addressChoseTitle, addressChoseSubtitle);
        console.log(value);
        closeAddress(popup);
    })
})
const closeOverlayPopup = (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      closeAddress(evt.target);
    }
  }
  const closeKeyEsc = (evt) => {
    if (evt.key === 'Escape') {
      closeAddress(popup);
    }
  }
  const openAddress = (popup) => {
    popup.classList.add("popup_opened");
    document.addEventListener('keyup', closeKeyEsc);
    document.addEventListener('click', closeOverlayPopup);
  }
  const closeAddress = (popup) => {
    popup.classList.remove("popup_opened");
    document.removeEventListener('keyup', closeKeyEsc);
    document.removeEventListener('click', closeOverlayPopup);
  }
  btnAddress.addEventListener('click', () => {
    openAddress(popup);
  });
  closeBtnAddress.addEventListener('click', () => {
    closeAddress(popup);
  })