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
                transition={{duration: 1, delay: 0.5}}
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
                    date={"10th Jan 10:00 AM"}
                    name={"Registration Starts"}
                    detail={"Register using the register button by submitting your details."}
                />
                <Card
                    key={2} 
                    initial={-2000}
                    date={"14th Jan 10:00 AM"}
                    name={"Registration Ends"}
                    detail={"We will be starting the ideation round right after."}
                />
                <Card
                    key={3} 
                    initial={2000}
                    date={"14th Jan 10:00 AM"}
                    name={"Ideation Round"}
                    detail={"Present your ideas in form of a ppt, including solution approach and techstacks"}
                />
                <Card
                    key={4} 
                    initial={-2000}
                    date={"16th Jan 12:00 NOON"}
                    name={"Ideation Results"}
                    detail={"Selected teams can start there coding."}
                />
                <Card
                    key={5} 
                    initial={2000}
                    date={"21st Jan 10:00 AM"}
                    name={"Mid Evaluation 1"}
                    detail={"This will be the first progress check of the teams."}
                />
                <Card
                    key={6} 
                    initial={-2000}
                    date={"25th Jan 10:00 AM"}
                    name={"Mid Evaluation 2"}
                    detail={"This will be the final progress check of the teams."}
                />
                <Card
                    key={7} 
                    initial={2000}
                    date={"29th Jan 10:00 AM"}
                    name={"Excalibur Finale"}
                    detail={"Submit and present your project before our judges."}
                />
                
            </div>
        </section>
    )
}