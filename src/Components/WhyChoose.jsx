import React from 'react';
import '../Styles/LandingPage.css';
import FileSvg from '../assets/folder-icon.svg';
import WCImage1 from '../assets/whychoose/wc1.png';
import WCImage2 from '../assets/whychoose/wc2.png';
import WCImage3 from '../assets/whychoose/wc3.png';
import WCImage4 from '../assets/whychoose/wc4.png';
import Solution1 from '../assets/whychoose/solution1.png';
import Solution2 from '../assets/whychoose/solution2.png';

const WhyChoose = () => {
  return (
  
    <div className="why-container">
        <div className='why-wrapper'>
            <h1>Why Choose TSquaredC </h1>
            <p>
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nulla velit, maximus sit amet suscipit in, fermentum id est. Suspendisse consequat ornare elit.”
            </p>

            <div className='why-card-container'>
                <div className='why-card card-1'>    
                    <div className='why-card-text'>
                    <div className='why-card-heading'>
                        <img src={FileSvg} alt="icon" className="why-icon" />
                        <h4>Tech & Talent Unified</h4>
                    </div>
                        <p>Access every technology, every skill set, and every tool - fully integrated and ready to execute.</p>
                    </div>
                    <div className='why-img img-1'>
                        <img src={WCImage1} alt='turbo-send'/>
                    </div>
                </div>
                <div className='why-card card-2'>    
                    <div className='why-card-text'>
                    <div className='why-card-heading'>
                        <img src={FileSvg} alt="icon" className="why-icon" />
                        <h4>Scale Right, Scale Fast</h4>
                    </div>
                        <p>Access every technology, every skill set, and every tool - fully integrated and ready to execute.</p>
                    </div>
                    <div className='why-img img-2'>
                        <img src={WCImage2} alt='turbo-send'/>
                    </div>
                </div>
                <div className='why-card card-3'>    
                    <div className='why-card-text'>
                    <div className='why-card-heading'>
                        <img src={FileSvg} alt="icon" className="why-icon" />
                        <h4>AI-Powered Innovation</h4>
                    </div>
                        <p>Access every technology, every skill set, and every tool - fully integrated and ready to execute.</p>
                    </div>
                    <div className='why-img img-3'>
                        <img src={WCImage3} alt='turbo-send'/>
                    </div>
                </div>
                <div className='why-card card-4'>    
                    <div className='why-card-text'>
                    <div className='why-card-heading'>
                        <img src={FileSvg} alt="icon" className="why-icon" />
                        <h4>Supercharge Your Product</h4>
                    </div>
                        <p>Access every technology, every skill set, and every tool - fully integrated and ready to execute.</p>
                    </div>
                    <div className='why-img img-4'>
                        <img src={WCImage4} alt='turbo-send'/>
                    </div>
                </div>
            </div>
        </div>

        <div className='solution-wrapper'>
            <h1>Choose Your Solution <br/> For Emerging Businesses</h1>
            <p>
            Propel your new age business forward with our Solutions:
            </p>

            <div className='solution-card-container'>
            <div className='outer-radial-effect-left'></div>
            <div className='outer-radial-effect-right'></div>
                <div className='solution-card solution-card-1'> 
                    <div className='solution-img solution1'>
                        <div className="radial-glow" />
                        <img src={Solution1} alt='T2C Solutions'/>
                    </div>   
                    <div className='solution-card-text'>
                        <h4>Plug and Play solutions</h4>
                        
                        <div className='card-footer'>
                        <div className='card-footer-text'>
                            <p><b>Instant Integration, Immediate Impact:</b> <br />
                            Dive into the market without delay, utilizing our fully integrated tech stack that meshes seamlessly with your operations.
                            </p>
                        </div>
                        <div className='card-footer-btn'>
                                <label>Customize Your Path</label>
                           </div>
                        </div>
                       
                    </div>
                   
                </div>
                <div className='solution-card solution-card-2'> 
                    <div className='solution-img solution2'>
                        <div className="radial-glow" />
                        <img src={Solution2} alt='T2C Solutions'/>
                    </div>   
                    <div className='solution-card-text'>
                        <h4>Customizable Solutions</h4>
                        
                        <div className='card-footer'>
                            <div className='card-footer-text'>
                                <p>Customizable Solutions designed for your business's unique demands & growth trajectory. <br /> <br/>
                                <b>Build, Expand:</b>
                                <br/>
                                Engineered for long-term evolution, these solutions ensure your technology infrastructure grows as dynamically as your business.
                                </p>
                            </div>
                           <div className='card-footer-btn'>
                                <label>Accelerate with Plug & Play</label>
                           </div>
            
                        </div>
                       
                    </div>
                   
                </div>

               
            </div>
        </div>
    </div>

    
  )
}

export default WhyChoose;
