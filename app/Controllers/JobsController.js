import { ProxyState } from "../AppState.js"
import jobsService from "../Services/JobsService.js"

function _drawJobs() {
    let jobs = ProxyState.jobs
    let template = ''
    jobs.forEach(j => template += j.Template)
    document.getElementById('jobs').innerHTML = template
}

export default class JobsController {
    constructor() {
        ProxyState.on('jobs', _drawJobs)
        jobsService.getJobs();
    }
}