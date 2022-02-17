// declare a variable applicationState. it's value is an object.
const applicationState = {
    //inside the object is an empty array -letters- for future user input 
    letters: [],
    authors:[],
    recipients:[],
    topics:[],
    letterBuilder: {}
}

//declare a variable API to store url for json server
const API = "http://localhost:8088"

//create a function that fetches external, existing data
export const fetchLetters = () => {
    //return and fetch API/letters
    return fetch (`${API}/letters?_expand=topic`)
    // use .then to get response from json
    .then(response => response.json())
    //use .then again to actually get the data
    .then(
        // store the data in a place where we can see it 
        (userLetters) => {
            //send the data to the applicationState variable holding the letters array
            applicationState.letters = userLetters
        }
    )  
}

export const fetchAuthors = () =>{
    return fetch (`${API}/authors`)
    .then(response => response.json())
    .then(
        (userAuthors) => {
            applicationState.authors = userAuthors
        }
    ) 
    
}
export const fetchRecipients = () =>{
    return fetch (`${API}/recipients`)
    .then(response => response.json())
    .then(
        (userRecipients) => {
            applicationState.recipients = userRecipients
        }
    ) 
    
}

export const fetchTopics = () =>{
    return fetch (`${API}/topics`)
    .then(response => response.json())
    .then(
        (userTopics) => {
            applicationState.topics = userTopics
        }
    ) 
    
}
//create a function -getLetters- to export 
//that will make a copy of the letters state using .map method 
export const getLetters = () =>{
    return applicationState.letters.map(letter => ({...letter}))
}

export const getAuthors = () => {
    return applicationState.authors.map(author => ({...author}))
}

export const getRecipients = () => {
    return applicationState.recipients.map(recipient => ({...recipient}))
}

export const getTopics = () => {
    return applicationState.topics.map(topic => ({...topic}))

}

export const getLetterBuilder = () => {
    return applicationState.letterBuilder
}

export const setAuthor = (id) => {
    applicationState.letterBuilder.authorId = id
}

export const setTopic = (id) => {
    applicationState.letterBuilder.topicId = id
}

export const setRecipient = (id) => {
    applicationState.letterBuilder.recipientId = id 
}

export const setLetter = (string) => {
   applicationState.letterBuilder.letterContent = string
}


//declare mainContainer variable assign it's value to the location where we will push the content to the DOM #container
const mainContainer = document.querySelector("#container")

//create a function sendLetter  to export that will use POST method to tell API 
// the user is creating something new - taking transient state user input 
//converting it to permenant state and storing it in database.json 
//take a paramenter of -userSentLetter- representing the letter user will send
export const sendLetter = (userSentLetter) =>{
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userSentLetter)
    }
    // return the API fetch 
    return fetch(`${API}/letters`, fetchOptions)
    .then(response => response.json())
    .then (() =>{
        //make a custom event that lets the dom know the state has changed 
        mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        //create the event listener on main.js for this 
    })
}

export const deleteLetter = (id) => {
    return fetch(`${API}/letters/${id}`, { method: "DELETE" })
        .then(
            () => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}