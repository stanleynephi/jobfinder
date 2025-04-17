import headerfooterpartials from "./utilities.mjs";
import { getParameter } from "./utilities.mjs";
import jobData from "./jobdata.mjs";
import jobList from "./joblist.mjs";
import { createSlideshow } from "./animations.mjs";


/**invoke them and test */
const category = getParameter("category")
const jobdata = new jobData(category)
const list = document.querySelector(".jobfinder_joblist")
const joblists = new jobList(category,jobdata,list)
joblists.init()
headerfooterpartials()


const controls = createSlideshow();

// Connect buttons
document.querySelector('.prev').addEventListener('click', controls.prev);
document.querySelector('.next').addEventListener('click', controls.next);