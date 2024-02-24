import { useState, useEffect } from "react";
import "./Event.css";
import img1 from '../assets/photos/IMG_0499.jpg'
import img2 from '../assets/photos/IMG_0532.jpg'
import img3 from '../assets/photos/IMG_0540.jpg'
import img4 from '../assets/photos/IMG_5583.jpg'
import img5 from '../assets/photos/IMG_5587.jpg'
import img6 from '../assets/photos/IMG_5592.jpg'

const imgUrls = [img1, img2, img3, img4, img5, img6]
export default function Event(){
    let idx = 0;
    useEffect(()=>{
        setInterval(()=>{
            idx = (idx+1)%imgUrls.length
            document.querySelector(".image-holder").querySelector("img").src = imgUrls[idx];
        }, 4000)
        
        console.log(imgUrls);

    }, [])
    return (
        <div className="about-event-container">
            <h2>What is <span>Excalibur</span>?</h2>
            <div className="event-glimpses">
                <div className="about-event">
                    {/* <p className="question-title">
                        What is Excalibur?
                    </p> */}
                    <p className="answer">
                        Excalibur is a software development team event.
                        Students from the first, second, pre-final years of all branches and programs are eleigible to participate.
                        Each team will comprise of 3 to 4 members and
                        inclusion of at least one female member is compulsory for each team.
                    </p>
                </div>
                <div className="glimpses">
                    <p className="question-title">
                        Excalibur Glimpses
                    </p>
                    <div className="image-holder">
                        <img src={imgUrls[0]} alt="Excalibur Glimpses"/>
                    </div>
                </div>
            </div>
        </div>
    )
}