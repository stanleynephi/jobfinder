/**import the header and footer function from the utilities folder */
import headerfooterpartials from "./utilities.mjs";
import { createSlideshow } from "./animations.mjs";


/**call the function to execute */
headerfooterpartials();

const controls = createSlideshow();

// Connect buttons
document.querySelector('.prev').addEventListener('click', controls.prev);
document.querySelector('.next').addEventListener('click', controls.next);




