//import getTopics from dataAccess 
import { getTopics } from "./dataAccess.js";
import { setTopic } from "./dataAccess.js";

// create a function that displays the radio buttons for the topics 

export const TopicButtons = () => {
    const topic = getTopics()
    
    let html = `<ul>`

    const listTopics = topic.map((topic) => {
        return `<li> 
            <input type="radio" name="topicButton" value ="${topic.id}"/>
            ${topic.topicName}
        </li>`
    })
    html += listTopics.join("")
    html += "</ul>"

    return html
}

document.addEventListener(
    "change",
    (event)=>{
        if(event.target.name === "topicButton"){
            setTopic(parseInt(event.target.value))
        }
    }

)