export default class House {
    constructor({ _id, bedrooms, bathrooms, levels, imgURL, year, price, description }) {
        this.id = _id
        this.bedrooms = bedrooms
        this.bathrooms = bathrooms
        this.levels = levels
        this.imgURL = imgURL
        this.year = year
        this.price = price
        this.description = description
    }


    get Template() {
        return /**html */`     
    <div class="col-4">
      <div class="card">
          <img class="card-img-top" src="${this.imgURL}" alt="">
          <div class="card-body">
              <h4 class="card-title">${this.bedrooms} - ${this.bathrooms} - ${this.levels}</h4>
              <p class="card-text">${this.description}</p>
              <div class="d-flex justify-content-between">
                  <button class="btn btn-outline-danger" onclick="app.housesController.removeHouse('${this.id}')">Delete</button>
                  <button class="btn btn-outline-info" onclick="app.housesController.bid('${this.id}')">+ $100</button>
                  <p>$${this.price.toFixed(2)}</p>
              </div>
          </div>
      </div>
    </div>
        `
    }
}