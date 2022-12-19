// Получаем и вставляем данные в карточку
export class Cards {
    constructor(data, cardSelector) {
      this._firstName = data.first_name;
      this._lastName = data.last_name;
      this._email = data.email;
      this._avatar = data.avatar;
      this._id = data["id"];
      this._cardSelector = cardSelector;
      this._element = this._getTemplate();
      this._elementImage = this._element.querySelector('.card-img-top');
      this._elementFirstName = this._element.querySelector('.card-title');
      this._elementLastName = this._element.querySelector('.card-subtitle');
      this._elementEmail = this._element.querySelector('.card-link');
    }
    _getTemplate() {
      return document
        .querySelector(this._cardSelector)
        .content
        .querySelector('.col')
        .cloneNode(true);
    };
    renderCard() {
      this._elementImage.src = this._avatar;
      this._elementImage.alt = this._firstName;
      this._elementFirstName.textContent = this._firstName;
      this._elementLastName.textContent = this._lastName;
      this._elementEmail.href = `mailto:${this._email}`;
      return this._element;
    };
  }