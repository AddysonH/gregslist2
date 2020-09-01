import { ProxyState } from "../AppState.js"
import housesService from "../Services/HousesService.js"

function _drawHouses() {
    let houses = ProxyState.houses
    let template = " "
    houses.forEach(h => template += h.Template)
    document.getElementById('houses').innerHTML = template
}

export default class HousesController {
    constructor() {
        ProxyState.on('houses', _drawHouses)
        housesService.getHouses();
    }
}
