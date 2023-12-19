import { useEffect, useState } from "react";
import "./Countdown.css"

export default function Countdown() {
    // function countdown(sec){
    //     const minutes = Math.floor(sec/60);
    //     const sec_left = sec%60;
    //     const hours = Math.floor(minutes/60);
    //     const minutes_left = minutes%60;
    //     const days_left = Math.floor(hours/24);
    //     const hours_left = hours%24;
    //     return {
    //         "days" : Math.floor(days_left),
    //         "hours" : Math.floor(hours_left),
    //         "minutes" : Math.floor(minutes_left),
    //         "seconds" : Math.floor(sec_left)
    //     }
    // }
    // const eventDate = new Date('2024-01-14T10:00:00')
    // let now = new Date();
    // let timeLeftSec = Math.floor((eventDate - now)/1000);
    // const [left, setLeft] = useState(countdown(timeLeftSec));
    // ##       useEffect(()=>{
    // ##           setLeft(()=>countdown(timeLeftSec))
    // ##       }, [left])

    function countdown(sec) {
        const minutes = Math.floor(sec / 60);
        const sec_left = sec % 60;
        const hours = Math.floor(minutes / 60);
        const minutes_left = minutes % 60;
        const days_left = Math.floor(hours / 24);
        const hours_left = hours % 24;
        return {
            "days": Math.floor(days_left),
            "hours": Math.floor(hours_left),
            "minutes": Math.floor(minutes_left),
            "seconds": Math.floor(sec_left)
        };
    }
    
    const eventDate = new Date('2024-01-14T10:00:00');
    let now = new Date();
    let timeLeftSec = Math.floor((eventDate - now) / 1000);
    
    const [left, setLeft] = useState(countdown(timeLeftSec))
    
    const intervalId = setInterval(() => {
        now = new Date();
        timeLeftSec = Math.floor((eventDate - now) / 1000);
        setLeft(()=>countdown(timeLeftSec));
    }, 1000);
    
    
    
    return (
        <div className="countdown-container">
            <p>Journey into the relms of code starts in ....</p>
            <div className="countdown">
                <span className="countdown-days">
                    <span className="days-left">{left.days}</span>
                    <span   className="text">Days</span>
                </span>
                <span className="countdown-hours">
                    <span className="hours-left">{left.hours}</span>
                    <span   className="text">Hours</span>
                </span>
                <span className="countdown-minutes">
                    <span className="minutes-left">{left.minutes}</span>
                    <span   className="text">Minutes</span>
                </span>
                <span className="countdown-seconds">
                    <span className="seconds-left">{left.seconds}</span>
                    <span   className="text">Seconds</span>
                </span>
            </div>
        </div>
    )
}