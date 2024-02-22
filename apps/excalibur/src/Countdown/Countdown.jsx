import { useEffect, useState } from "react";
import "./Countdown.css"
import Register from "../Register/Register";


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
    
    const eventDate = new Date('2024-02-29T08:00:00');
    let now = new Date();
    let timeLeftSec = Math.floor((eventDate - now) / 1000);
    
    const [left, setLeft] = useState(countdown(timeLeftSec))
    
    const intervalId = setInterval(() => {
        now = new Date();
        timeLeftSec = Math.floor((eventDate - now) / 1000);
        setLeft(()=>countdown(timeLeftSec));
    }, 1000);


// ### Message for Future Contributors

    //  ##   While I was writing this logic only god and i knows how it was working
    //  ##   Now only god knows..
    //  ##   Issue is that state changes inside setInterval or setTimeout often lead to some unwanted results
    //  ##   If you dont believe that, just console.log(left)
    //  ##   But somehow it is doing what's needed, so I didn't touched it.
    //  ##   Change it on your own risk
    //  ##   Regards -> Debatreya
    
    return (
        <div className="countdown-container">
            <p>Journey into the relms of code starts in ....</p>
            <div className="countdown">
                <span className="countdown-days">
                    <span className="days-left">{left.days > 0 ? left.days : "00"}</span>
                    <span   className="text">Days</span>
                </span>
                <span className="countdown-hours">
                    <span className="hours-left">{left.hours > 0 ? left.hours : "00"}</span>
                    <span   className="text">Hours</span>
                </span>
                <span className="countdown-minutes">
                    <span className="minutes-left">{left.minutes > 0 ? left.minutes : "00"}</span>
                    <span   className="text">Minutes</span>
                </span>
                <span className="countdown-seconds">
                    <span className="seconds-left">{left.seconds > 0 ? left.seconds : "00"}</span>
                    <span   className="text">Seconds</span>
                </span>
            </div>
            <Register />
        </div>
    )
}