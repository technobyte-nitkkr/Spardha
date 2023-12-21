import { useState, useEffect } from "react";
import "./Event.css";

const imgUrls = [
    "https://res.cloudinary.com/devex/image/fetch/https://lh4.googleusercontent.com/VQyrPPyh-FGdV2BJtlcwDphesnxERD6SLWvGtARygLDVNSsXhFF0kzG_yXvLyiARZbKIG3VYF_CIbF4_B-Wy3Eu7kKhHKKR3pq_2ob2pdZgxt_Wz_uqXjRMrhIBKREQnJo--Ui9b",
    "https://blog-c7ff.kxcdn.com/blog/wp-content/uploads/2019/09/Capture_HAckathon_wordpress.jpg",
    "https://assets.website-files.com/5b3dd54182ecae4d1602962f/609e33e18c5000af6211f094_HR%20Hackathon%20-%20Section%202.jpg"
]

export default function Event(){
    
    return (
        <div className="about-event-container" id="about">
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
                        <img src={imgUrls[0]} alt="Excalibur Glimpses"/>
                        {/* <ImageSlider imgUrls={imgUrls} /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}