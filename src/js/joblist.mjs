/**import renderwithtemplate function from the function */
import { renderlistwithtemplate } from "./utilities.mjs"

/**create a template for the jobs */
function joblist(job){
    /**create html element to contain thee list */
    return `
             <li class="job-card">
                <h3>${job.title}</h3>
                <p><strong>Company:</strong> ${job.company_name}</p>
                <p><strong>Location:</strong> ${job.candidate_required_location}</p>
                <a href="/jobpage/job_page.html?job=${job.title}">View Job</a>
            </li>
    `
}




/**a class to create a new list of job cards in the HTML from the provided array. */
export default class jobList{
    constructor(category,dataSource,listElement){
        this.category = category
        this.dataSource = dataSource
        this.listElement = listElement
    }

    /**async init to get the data from the data source */
    async init() {
        const list = await this.dataSource.getData(this.category)
        this.renderlist(list)
        console.log(list)
    }


    renderlist(list){
        /**invoke the renderwithtemplate function to render the list */
        renderlistwithtemplate(joblist,this.listElement,list)
    }
}