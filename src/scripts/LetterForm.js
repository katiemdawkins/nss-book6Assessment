// import sendLetter function from dataAccess.js
import { sendLetter } from "./dataAccess.js";

//declare the mainConttainer variable
const mainContainer = document.querySelector("#container")
// create a click event listener that captures all the user input 

    //create a variable to store all user input
    //invoke the sendLetter function with the user input variable from above as the argument


//create a function that generates all the HTML for the form include...
    //form includes Author Drop Down Select menu - select- element
    //textarea for letter - textarea- element
    //radio buttons for topic choices 
    // select element for recipient
    // send button

    //make sure to return the html

export const LetterForm = () => {
    let html = `
    <div class="field">
        <select class="authors>
            <option value="">Choose your author...</option>
        </select>
    </div>
    <div class="field">
        <label class="label" for="userLetter">Your Letter</lable>
        <input type="textarea" name="userLetter" class="input"/>
    </div>
    <div class="field" id="radioButtons">
    </div>
    <div class="field"></div>
    <button class="button" id="submitLetter">Submit Letter</button>
    `
    return html
}