import { ProxyState } from "../AppState.js"
import House from "../Models/House.js"
import { api } from "./AxiosService.js"

class HousesService {

    async getHouses() {
        let res = await api.get("houses")
        ProxyState.houses = res.data.data.map(h => new House(h))
    }
}

const SERVICE = new HousesService();
export default SERVICE;