import { getRecipients } from "./dataAccess.js"
import { setRecipient } from "./dataAccess.js"


export const Recipient = () => {
    const theRecipient = getRecipients()
    
    let html = ""
    
    html += "<select id='recipient' name='recipient'>"
    html += '<option value="0">Choose your recipient...</option>'

    const arrayOfRecipients = theRecipient.map ( (theRecipient) => {
        return `<option name="chosenRecipient" value="${theRecipient.id}">${theRecipient.recipientName}</option>`
        }
    )
    html += arrayOfRecipients.join("")
    html += "</select>"
    return html
}

document.addEventListener(
    "change",
    (event)=>{
        if(event.target.id === "recipient"){
            setRecipient(parseInt(event.target.value))
        }
    }

)