import "./Timeline.css"
import React, {useEffect, useRef} from "react"
import {motion, useInView, useAnimation, useIsPresent} from "framer-motion"

const Card = ({initial, date, name, detail})=>{
    const ref = useRef(null);
    const isInView = useInView(ref)

    const mainControls = useAnimation();
    useEffect(()=>{
        const focus = ref.current;
        const carddiv = focus.querySelector(".timeline-card");
        if(isInView){
            mainControls.start("visible")
            carddiv.classList.add("focused")
        }
        else{
            carddiv.classList.remove("focused")
        }
    }, [isInView])
    return(
        <div className="timeline-extra-card" ref={ref} style={{position: "relative"}}>
            <motion.div 
                className="timeline-card"
                variants={{
                    hidden: {
                        x: initial
                    },
                    visible: {x: 0},
                }}
                initial="hidden"
                animate={mainControls}
                transition={{duration: 0.5, delay: 0.2}}
            >
                <span className="event-date">{date}</span>
                <span className="event-name">{name}</span>
                <p className="event-detail">{detail}</p>
            </motion.div>
        </div>
    )
}

export default function Timeline(){
    return (
        <section className="schedule" id="schedule">
            <h2>Schedule</h2>
            <div className="timeline-container">

                <Card
                    key={1} 
                    initial={2000}
                    date={"22th Feb 10:00 AM"}
                    name={"Registration Starts"}
                    detail={"Register using the register button by submitting your details."}
                />
                <Card
                    key={2} 
                    initial={-2000}
                    date={"29th Feb 10:00 AM"}
                    name={"Registration Ends"}
                    detail={"We will be starting the ideation round right after."}
                />
                <Card
                    key={3} 
                    initial={2000}
                    date={"29th Feb 10:00 AM"}
                    name={"PPT Submission"}
                    detail={"Submit your ideas in form of a ppt, including solution approach and techstacks, at unstop"}
                />
                <Card
                    key={4} 
                    initial={-2000}
                    date={"1st March 12:00 NOON"}
                    name={"Ideation Results"}
                    detail={"Selected teams can start there coding. Mentors will be assigned to selected teams."}
                />
                <Card
                    key={5} 
                    initial={2000}
                    date={"07th March 10:00 AM"}
                    name={"Mentor's Evaluation"}
                    detail={"This will be the first progress check of the team's mentor."}
                />
                <Card
                    key={6} 
                    initial={-2000}
                    date={"07th March 10:00 AM"}
                    name={"Mentor's Evaluation Results"}
                    detail={"Selected teams head for the finale. Teams need to be present on campus for finale."}
                />
                <Card
                    key={7} 
                    initial={2000}
                    date={"15th March 10:00 AM"}
                    name={"Excalibur Finale"}
                    detail={"Submit and present your project before our judges."}
                />
                
            </div>
        </section>
    )
}