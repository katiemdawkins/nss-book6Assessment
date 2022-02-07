//import the necessary functions from PenPals and data access 
import { fetchRequests } from "./dataAccess.js";
import { PenPals } from "./PenPals.js"


//declare a variable of mainContainer make it's value the place where we'll send the HTML
const mainContainer = document.querySelector("#container")

//custom eventListener from "stateChanged" even on dataAccess
mainContainer.addEventListener(
    "stateChanged",
    customEven => {
       render()
    }
)

//function rendering all HTML to the DOM
const render = () => {
    //invoke fetchRequests function to get all external data
    fetchRequests().then (
        () => {
            //invoke PenPal function which has all html for the site
            mainContainer.innerHTML= PenPals()
        }
    )
}

// invoke the render function
render ()