//import the necessary functions from PenPals and data access 
import { fetchLetters, fetchAuthors, fetchTopics, fetchRecipients } from "./dataAccess.js";
import { PenPals } from "./PenPals.js"


//declare a variable of mainContainer make it's value the place where we'll send the HTML
const mainContainer = document.querySelector("#container")

//custom eventListener from "stateChanged" event on dataAccess
mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
       render()
    }
)

//function rendering all HTML to the DOM
const render = () => {
    //invoke all fetch functions to get all external data
    fetchLetters()
    .then(fetchAuthors)
    .then(fetchTopics)
    .then(fetchRecipients)
    .then (
        () => {
            //invoke PenPal function which has all html for the site
            mainContainer.innerHTML= PenPals()
        }
    )
}

// invoke the render function
render ()