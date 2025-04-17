import headerfooterpartials from "./utilities.mjs";
import { createSlideshow } from "./animations.mjs";



headerfooterpartials()



const controls = createSlideshow();

// Connect buttons
document.querySelector('.prev').addEventListener('click', controls.prev);
document.querySelector('.next').addEventListener('click', controls.next);