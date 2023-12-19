import { useState } from "react";
import "./Event.css";
export default function Event(){
    const [url, setUrl] = useState("https://assets.website-files.com/5b3dd54182ecae4d1602962f/609e33e18c5000af6211f094_HR%20Hackathon%20-%20Section%202.jpg");

    return (
        <div className="about-event-container">
            <h2>What is <span>Excalibur</span>?</h2>
            <div className="event-glimpses">
                <div className="about-event">
                    <p className="question-title">
                        What is Excalibur?
                    </p>
                    <p className="answer">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam eos impedit maxime iure, voluptatibus saepe culpa accusamus voluptates veritatis hic odit minima officiis tempore laudantium voluptas et numquam sint expedita!
                    </p>
                </div>
                <div className="glimpses">
                    <p className="question-title">
                        Excalibur Glimpses
                    </p>
                    <div className="image-holder">
                        <img src={url} alt="Excalibur Glimpses"/>
                    </div>
                </div>
            </div>
        </div>
    )
}