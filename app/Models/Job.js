export default class Job {
    constructor({ _id, company, jobTitle, hours, rate, description }) {
        this.id = _id
        this.company = company
        this.jobTitle = jobTitle
        this.hours = hours
        this.rate = rate
        this.description = description
    }

    get Template() {
        return `     
    <div class="col-4">
      <div class="card">
          <div class="card-body">
              <h4 class="card-title">${this.company} - ${this.hours}</h4>
              <p class="card-text">${this.description}</p>
              <div class="d-flex justify-content-between">
                  <button class="btn btn-outline-danger" onclick="app.housesController.removeHouse('${this.id}')">Delete</button>
                  <button class="btn btn-outline-info" onclick="app.housesController.bid('${this.id}')">+ $100</button>
                  <p>$${this.rate.toFixed(2)}</p>
              </div>
          </div>
      </div>
    </div>
        `
    }

}