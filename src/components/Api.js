// Логика получения данных через api
export class Api {
    constructor(options) {
      this.address = options.urlJson;
      this.headers = options.headers;
    }
    _checkResponse(res) {
      if (res.ok) {
          return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
  }
    getUsers() {
      return fetch(`${this.address}/users`, {
        method: 'GET',
      }).then(this._checkResponse);
    }
    
  }