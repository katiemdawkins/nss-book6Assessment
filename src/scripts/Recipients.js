import { getRecipients } from "./dataAccess.js"

const theRecipient = getRecipients()

export const Recipient = () => {
    let html = ""
    
    html += "<select class='recipient' name='recipient'>"
    html += '<option value="0">Choose your recipient...</option>'

    const arrayOfRecipients = theRecipient.map ( (theRecipient) => {
        return `<option value="${theRecipient.id}">${theRecipient.recipientName}</option>`
        }
    )
    html += arrayOfRecipients.join("")
    html += "</select>"
    return html
}