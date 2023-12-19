import "./Timeline.css"
export default function Timeline(){
    return (
        <section className="schedule">
            <h2>Schedule</h2>
            <div className="timeline-container">

                <div className="timeline-extra-card">
                    <div className="timeline-card">
                        <span className="event-date">10th Jan 10:00 AM</span>
                        <span className="event-name">Registration Starts</span>
                        <p className="event-detail">Register using the register button by submitting your details.</p>
                    </div>
                </div>

                <div className="timeline-extra-card">
                    <div className="timeline-card">
                        <span className="event-date">14th Jan 10:00 AM</span>
                        <span className="event-name">Registration Ends</span>
                        <p className="event-detail">We will be starting the ideation round right after.</p>
                    </div>
                </div>
                
                <div className="timeline-extra-card">
                    <div className="timeline-card">
                        <span className="event-date">14th Jan 10:00 AM</span>
                        <span className="event-name">Ideation Round</span>
                        <p className="event-detail">Present your ideas in form of a ppt, including solution approach and techstacks</p>
                    </div>
                </div>

                <div className="timeline-extra-card">
                    <div className="timeline-card">
                        <span className="event-date">16th Jan 12:00 NOON</span>
                        <span className="event-name">Ideation Results</span>
                        <p className="event-detail">Selected teams can start there coding.</p>
                    </div>
                </div>

                <div className="timeline-extra-card">
                    <div className="timeline-card">
                        <span className="event-date">21st Jan 10:00 AM</span>
                        <span className="event-name">Mid Evaluation 1</span>
                        <p className="event-detail">This will be the first progress check of the teams.</p>
                    </div>
                </div>

                <div className="timeline-extra-card">
                    <div className="timeline-card">
                        <span className="event-date">25th Jan 10:00 AM</span>
                        <span className="event-name">Mid Evaluation 2</span>
                        <p className="event-detail">This will be the final progress check of the teams.</p>
                    </div>
                </div>

                <div className="timeline-extra-card">
                    <div className="timeline-card">
                        <span className="event-date">29th Jan 10:00 AM</span>
                        <span className="event-name">Excalibur Finale</span>
                        <p className="event-detail">Submit and present your project before our judges.</p>
                    </div>
                </div>
                
            </div>
        </section>
    )
}