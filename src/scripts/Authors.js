import { getAuthors } from "./dataAccess.js"
import { setAuthor, fetchAuthors } from "./dataAccess.js"




export const Authors = () => {
    const theAuthors = getAuthors()
    
    let html = ""
    
    html += "<select id='authors' name='authors'>"
    html += '<option value="0">Choose your author...</option>'

    const arrayOfAuthors = theAuthors.map ( (theAuthors) => {
        return `<option name="chosenAuthor" value="${theAuthors.id}">${theAuthors.authorName}</option>`
        }
    )
    html += arrayOfAuthors.join("")
    html += "</select>"
    return html
}

document.addEventListener(
    "change",
    (event)=>{
        if(event.target.id === "authors"){
            setAuthor(parseInt(event.target.value))
        }
    }
)