const baseURL = "https://remotive.com/api/remote-jobs"


/**function to convert data to json */
function convertToJson(res){
    if(res.ok){
        return res.json()
    }
    else{
        throw new Error("Error fetching data")
    }
}

/**product data class */
export default class jobdetails{
    constructor(jobname){
        this.jobname = jobname
    }

    /**get the data based on the category passed */
    async getData(jobname){
        const res = await fetch(baseURL+`?search=${encodeURIComponent(jobname)}`)
        const data = await convertToJson(res)
        return data.jobs
    }
}