// import sendLetter function from dataAccess.js
import { getLetters, sendLetter } from "./dataAccess.js";
import { Authors } from "./Authors.js";
import { Recipient } from "./Recipients.js";
import { TopicButtons } from "./Topics.js";
import { userLetter } from "./UserLetters.js";
import { getLetterBuilder } from "./dataAccess.js";


//declare the mainConttainer variable
const mainContainer = document.querySelector("#container")

// create a click event listener that captures all the user input 
mainContainer.addEventListener(
    "click",
    (event) =>{
        if(event.target.id === "submitLetter"){
            //create a variable to store all user input
            let builtLetter = getLetterBuilder()
            const userLetter = document.querySelector("textarea[name='letterText']").value
            let userDate = new Date(Date.now)
            userDate = `${userDate.getMonth()}/${userDate.getDate()}/${userDate.getFullYear()}`

            //make an object of user input 
            const dataToSendToAPI = {
                authorId: builtLetter.authorId,
                recipientId: builtLetter.recipientId,
                topicId: builtLetter.topicId,
                letterContent: userLetter,
                dateSent: userDate
            }

            //invoke the sendLetter function with the user object from above as the argument
            sendLetter(dataToSendToAPI)
        }
    }
)



    
    export const LetterForm = () => {
        let html = `
        <div class="field1">
        <label for="authors" class="form">Authors</lable>
        ${Authors()}
        </div>
        <div class="field1">
        <label class="label" for="userLetter">Your Letter</lable>
        <textarea id="letterText" name="letterText" cols="40" rows="5"></textarea>
        
        </div>
        <div class="field" id="radioButtons">
        ${TopicButtons()}
        </div>
        <div class="field1">
        <label for="recipient">Recipient</label>
        ${Recipient()}
        </div>
        <button class="button" id="submitLetter">Submit Letter</button>
        `
        return html
    }
    
    //create a function that generates all the HTML for the form include...
        //form includes Author Drop Down Select menu - select- element
        //textarea for letter - textarea- element
        //radio buttons for topic choices 
        // select element for recipient
        // send button
    
        //make sure to return the html
    