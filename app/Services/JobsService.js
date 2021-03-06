import { ProxyState } from "../AppState.js"
import Job from "../Models/Job.js"
import { api } from "./AxiosService.js"

class JobsService {
    async getJobs() {
        let res = await api.get('jobs')
        ProxyState.jobs = res.data.data.map(j => new Job(j))
    }
}

const SERVICE = new JobsService();
export default SERVICE