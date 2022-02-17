// import getLetters from dataAccess
import { getLetters } from "./dataAccess.js";
import { getAuthors} from "./dataAccess.js";
import { getRecipients } from "./dataAccess.js";
import { getTopics } from "./dataAccess.js";
import { deleteLetter } from "./dataAccess.js";



//create a function that creates the structure for the sent letters to be displayed after
//the user hits submit letter button  


const convertLettersToParagraph = (letterObj) => {
    const author = getAuthors()
    const recipient = getRecipients()
    const topic = getTopics()

    const foundAuthor = author.find(author => author.id === letterObj.authorId)
    const foundRecipient = recipient.find(recipient=> recipient.id === letterObj.recipientId)


    

    let html = `<p class="letter">
        Dear ${foundAuthor.authorName} (${foundAuthor.emailAddress}),<br><br>

        ${letterObj.letterContent}<br><br>

        Sincerly, ${foundRecipient.recipientName} (${foundRecipient.emailAddress})<br><br>

        Sent on ${letterObj.dateSent}<br><br>

        <button id="topicButton">${letterObj.topic.topicName}</button><br>
        
     </p>`

    return html
}

export const userLetter = () => {
    const letters = getLetters()

    let html = `
        <div>
            ${
                letters.map(convertLettersToParagraph).join("")
            }
        </div>`
    
    return html
}

// const mainContainer = document.querySelector("#container")

// mainContainer.addEventListener("click", click => {
//     if (click.target.id.startsWith("request--")) {
//         const [,requestObjId] = click.target.id.split("--")
//         deleteRequest(parseInt(requestObjId))
//     }
// })
