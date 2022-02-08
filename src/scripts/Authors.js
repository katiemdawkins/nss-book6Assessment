import { getAuthors } from "./dataAccess.js"

const theAuthors = getAuthors()

export const Authors = () => {
    let html = ""
    
    html += "<select class='authors' name='authors'>"
    html += '<option value="0">Choose your author...</option>'

    const arrayOfAuthors = theAuthors.map ( (theAuthors) => {
        return `<option value="${theAuthors.id}">${theAuthors.authorName}</option>`
        }
    )
    html += arrayOfAuthors.join("")
    html += "</select>"
    return html
}