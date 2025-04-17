/**import header and footer for testing */
import headerfooterpartials from "./utilities.mjs";
/**import the get param function, datasource and the */
import { getParameter } from "./utilities.mjs";
import jobdetails from "./getdetails.mjs";
import JobInformation from "./jobdetails.mjs";



const parameter = getParameter("job")
const datasource = new jobdetails(parameter)
const infomations = new JobInformation(parameter,datasource)
infomations.init()
console.log(datasource)




headerfooterpartials()