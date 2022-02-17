// import ...
import { LetterForm } from "./LetterForm.js"
import { userLetter } from "./UserLetters.js"

//create a function to export PenPals() that will be our HTML outline 
    //invoke the functions that render the letter form, and the submitted letters
    //letters sub heading
        //invoke function that displays letters from json database 
export const PenPals = () => {
    return `
    <h1>The PenPal Club</h1>
    <section id="letterForm">
        <h3>Send a Letter to a Pal</h3>
        ${LetterForm()}
    </section>

    <section class="rendered_letters">
        <h3>Letters</h3>
        ${userLetter()}
    </section>
    `
}
