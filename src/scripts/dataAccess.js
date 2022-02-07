// declare a variable applicationState. it's value is an object.
const applicationState = {
    //inside the object is an empty array -letters- for future user input 
    letters: []
}

//declare a variable API to store url for json server
const API = "http://localhost:8088"

//create a function that fetches external, existing data
export const fetchRequests = () => {
    //return and fetch API/letters
    return fetch (`${API}/letters`)
    // use .then to get response from json
    .then(response => response.json())
    //use .then again to actually get the data
    .then(
        // store thhe data in a place where we can see it 
        (userLetters) => {
            //send the data to the applicationState variable holding the letters array
            applicationState.letters = userLetters
        }
    )  
}

//create a function -getLetters- to export 
//that will make a copy of the letters state using .map method 
export const getLetters = () =>{
    return applicationState.letters.map(letter => ({...letter}))
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
    return fetch (`${API}/letters`, fetchOptions)
    .then(response => response.json())
    .then (() =>{
        //make a custom event that lets the dom know the state has changed 
        mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        //create the event listener on main.js for this 
    })
}