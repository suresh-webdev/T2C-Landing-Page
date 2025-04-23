import React from 'react';
import '../Styles/LandingPage.css';
import Send from '../assets/send.png';
import Auth from '../assets/auth.png';
import Stream from  '../assets/stream.png';
import Cloud from '../assets/cloud.png';
import { RxArrowTopRight } from "react-icons/rx";
import Rocket from '../assets/space.png';
import SvgRocket from '../assets/svg_rocket.png';


const TechnologyAndAbout = () => {
  return (
    <div className='techAndAboutContainer'>
    <div className="technology-container">
        <div className='technology-wrapper'>
            <h1>Technology, Turbocharged</h1>
            <p>
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nulla velit, maximus sit amet suscipit in, fermentum id est. Suspendisse consequat ornare elit.”
            </p>

            <div className='tech-card-container'>
                <div className='tech-card'>    
                    <img src={Send} alt='turbo-send'/>
              
                    <div className='tech-card-text'>
                        <h4>TurboSend</h4>
                        <p>Instantly deploy powerful chat functionalities built for scalability and real-time performance. No delays, just results.</p>
                        <a href='#'>Check now <RxArrowTopRight className='arrow-icon'/></a>
                    </div>
                </div>
                <div className='tech-card'>
                    <img src={Auth} alt='turbo-auth'/>
                    <div className='tech-card-text'>
                        <h4>TurboAuth</h4>
                        <p>
                            From Google to OAuth, we integrate every major SSO option, ensuring secure, seamless access for all users.
                        </p>
                        <a href='#'>Check now <RxArrowTopRight  className='arrow-icon'/></a>
                    </div>
                </div>
                <div className='tech-card'>
                    <img src={Stream} alt='turbo-stream'/>
                    <div className='tech-card-text'>
                        <h4>TurboStream</h4>
                        <p>Deliver video content without lag or interruptions. TurboStream powers your platform with flawless video performance.</p>
                        <a href='#'>Check now <RxArrowTopRight className='arrow-icon'/></a>
                    </div>
                </div>
                <div className='tech-card'>
                    <img src={Cloud} alt='turbo-cloud'/>
                    <div className='tech-card-text'>
                        <h4>TurboCloud</h4>
                        <p>Monitor, optimize, and scale your cloud infrastructure effortlessly—TurboCloud ensures your system runs at peak efficiency</p>
                        <a href='#'>Check now <RxArrowTopRight className='arrow-icon' style={{ color: '#909DC1' }}/></a>
                    </div>
                </div>

            </div>
        </div>
    </div>

    {/* Background Effect */}
    
    <div className="background-effect-layer"></div>
    <div className="background-second-layer"></div>

    

    <div className='about-t2c-container'>
        <div className='aboutT2CWrapper'>
            <div className='about-t2c-text'>
                <h1>About TSquaredC</h1>
                <p>
                At T2C, we push the boundaries of technology for businesses worldwide by creating solutions that are both innovative and robust. Our focus is on seamless integration and strategic innovation, ensuring efficient operations and scalable growth. <br /> <br />
                We are committed to empowering businesses in a digital-first world, simplifying complex systems to address challenges and unlock opportunities. Our scalable solutions are designed for high performance, prioritizing customer success and sustainable growth.
                </p>
            </div>
            <div className='t2c-img-container'>
                <img className="aboutT2Cimg" src={Rocket} alt='rocket' />
                <img className='svgRocket' src={SvgRocket} alt = 'svg-rocket' />
            </div>
            
        </div>
    </div>
    </div>
  )
}

export default TechnologyAndAbout;
