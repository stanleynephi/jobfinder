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
export default class jobData{
    constructor(category){
        this.category = category
    }

    /**get the data based on the category passed */
    async getData(category){
        const res = await fetch(baseURL+`?category=${category}`)
        const data = await convertToJson(res)
        console.log(data.jobs)
        return data.jobs
    }
}