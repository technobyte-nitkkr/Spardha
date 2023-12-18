import React from 'react'
// import Background from '../../components/Background/Background'
// import 'bootstrap/dist/css/bootstrap.css'
import Image from 'next/image'
import img1 from '../../public/assets/about_carousal/1.jpg';
import img2 from '../../public/assets/about_carousal/2.jpg';
import img3 from '../../public/assets/about_carousal/3.jpg';
import img4 from '../../public/assets/about_carousal/4.jpg';
import img5 from '../../public/assets/about_carousal/5.jpg';
import app1 from "../../public/assets/app_carousal/final1.png"
import app2 from "../../public/assets/app_carousal/final2.png"
import app3 from "../../public/assets/app_carousal/final3.png"
import app4 from "../../public/assets/app_carousal/final4.png"
import app45 from "../../public/assets/app_carousal/final45.png"
import app5 from "../../public/assets/app_carousal/final5.png"
import { Carousel, } from "react-bootstrap";

import './About.css';  
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube , FaGooglePlay} from 'react-icons/fa';

const About = () => {
    return (
        
        <div style={{margin: "10px auto", alignItems: "center", height:"fit-content"}} id='About'>
           
        <div className="headingGL text-5xl font-starlord-1">
                About Techspardha
           </div>
           
            <div className="Description">
          <p>Techspardha is the annual techno-managerial festival of National Institute of Technology, Kurukshetra. It started in 1995 as "Technospect" (later changed to Literati). The year 2013 marked the Golden Jubilee of NIT Kurukshetra, thus it was renamed as Techspardha. Etymologically, the word ‘Techspardha’ is composed of two words, ‘Tech’ in English is a contraction of technology and ‘Spardha’ in Hindi means competition.Techspardha is known for hosting a variety of events that include competitions, exhibitions, guest lectures as well as workshops.</p>
            </div>

        <div className="Heading">
          Install the Techspardh App Now!
        </div>

          <div className="aboutscroll1">
            <Carousel interval={2000}> 
              <Carousel.Item>
                <div className="wrapper">
                  <Image className="d-block  aboutimg" alt="" src={app1} />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <Image className="d-block  aboutimg" alt="" src={app2} />
              </Carousel.Item>
              <Carousel.Item>
                <Image className="d-block  aboutimg" alt="" src={app3} />
              </Carousel.Item>
              <Carousel.Item>
                <Image className="d-block  aboutimg" alt="" src={app4} />
              </Carousel.Item>
              <Carousel.Item>
                <Image className="d-block  aboutimg" alt="" src={app45} />
              </Carousel.Item>
              <Carousel.Item>
                <Image className="d-block  aboutimg" alt="" src={app5} />
              </Carousel.Item>
            </Carousel>
          </div>

        <div className="buttons">
          <div className="learn">
            <a href="https://play.google.com/store/apps/details?id=com.nitkkr.altius"><span ><FaGooglePlay size={30}/>  Download Now</span></a>
          </div>
        </div>
        <div className="Heading"> Some glimpses from the past...</div>

           <div style={{margin: "10px auto", padding: "20px"}}>
               <div className="aboutscroll">
           <Carousel>
          <Carousel.Item>
            <div className="wrapper">
            <Image className="d-block  aboutimg" alt="" src={img1} />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <Image className="d-block  aboutimg" alt="" src={img2} />
          </Carousel.Item>
          <Carousel.Item>
            <Image className="d-block  aboutimg" alt="" src={img3} />
          </Carousel.Item>
          <Carousel.Item>
            <Image className="d-block  aboutimg" alt="" src={img4} />
          </Carousel.Item>
          <Carousel.Item>
            <Image className="d-block  aboutimg" alt="" src={img5} />
          </Carousel.Item>
        </Carousel> 
        </div>
               <div style={{margin: "30px"}}>
                   <div style={{color: "white", textAlign: "center", fontSize: "1.5rem", margin: "20px"}} >
                       Checkout Techspardha 18 Aftermovie : 
                   </div>
                   <div>
                   <div className="video-responsive">
                   <iframe width="360" height="115" 
                   src="https://www.youtube.com/embed/NyHq7Pp1PuY" 
                   title="YouTube video player" 
                   frameBorder="0" 
                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                   allowFullScreen></iframe>
                  </div>
                   </div>
               </div>

              
               
           </div>
           </div>

    )
}

export default About
