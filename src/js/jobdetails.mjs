/**create template to contain job information and job details */
function jobdetails(job){
    return `
        <div>
            <img src="${job[0].company_logo}" alt="${job[0].company_name}">
            <div>
                <h1>${job[0].company_name}</h1>
                <h2>${job[0].title}</h2>
                <p><strong>Location:</strong> ${job[0].candidate_required_location}</p>
                <p><strong>Type:</strong> ${job[0].job_type}</p>
                <div>${job[0].description}</div>
                <p><a href="${job[0].url}" target="_blank">View Full Job Posting And Apply</a></p>
            </div>
        </div>
    `
}


/**job details class */
export default class JobInformation{
    constructor(job_name,datasource){
        this.job_name = job_name
        this.datasource = datasource
        this.job = {}
    }

    async init(){
        
        try {
            /**use the datasource to get the details of the current product */
            this.job = await this.datasource.getData(this.job_name)
            console.log(this.job)
            this.renderjobdetails("section")
        } catch (error) {
            
        }

        return this.job
    }


    renderjobdetails(selector){
        /**render the job details */
        const element = document.querySelector(selector)
        element.insertAdjacentHTML(
            "afterBegin",
        jobdetails(this.job)
        )
    }
}