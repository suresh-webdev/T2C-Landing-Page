import React,{useState} from 'react';
import '../Styles/Testimonials.css'; 
import ReviewIcon from '../assets/review-icon.png'; // Assuming you have an icon for review
import LocationIcon from '../assets/location-icons.svg';
import MailIcon from '../assets/mail-icon.svg';
import HeadSetIcon from '../assets/headset-icon.svg';

const testimonials = [
  {
    name: 'Ganesh Iyer',
    review: '“T²C turned our ambitious idea into a market-ready product in record time. Their end-to-end expertise and accelerators like TurboCloud streamlined our development process, saving us months of work. From ideation to execution, they were the perfect tech partner.”',
    company:'Eyemyeye'
  },
  {
    name: 'Raktim Bharatee',
    review: '“We were struggling with onboarding inefficiencies until T²C stepped in. Their AI-driven solutions and seamless integration of TurboAuth transformed our workflows, cutting onboarding time by 50%. It’s like having a powerhouse tech team on demand.”',
    company:'PiChain'
  },
  {
    name: 'Jaykanth Raj',
    review: '“Partnering with T²C was a game-changer. Their accelerators, like TurboStream, optimized our video streaming capabilities, helping us deliver a flawless user experience. They didn’t just meet our expectations - they redefined what’s possible in tech collaboration”',
    company:'Stealth Mode Startup'
  },
  {
    name: 'Ganesh Iyer',
    review: '“T²C turned our ambitious idea into a market-ready product in record time. Their end-to-end expertise and accelerators like TurboCloud streamlined our development process, saving us months of work. From ideation to execution, they were the perfect tech partner.”',
    company:'Eyemyeye'
  },
  {
    name: 'Raktim Bharatee',
    review: '“We were struggling with onboarding inefficiencies until T²C stepped in. Their AI-driven solutions and seamless integration of TurboAuth transformed our workflows, cutting onboarding time by 50%. It’s like having a powerhouse tech team on demand.”',
    company:'PiChain'
  },
  {
    name: 'Jaykanth Raj',
    review: '“Partnering with T²C was a game-changer. Their accelerators, like TurboStream, optimized our video streaming capabilities, helping us deliver a flawless user experience. They didn’t just meet our expectations - they redefined what’s possible in tech collaboration”',
    company:'Stealth Mode Startup'
  },
];
const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const visibleCards = 3;
  
    const handleSlide = (direction) => {
      if (direction === 'left' && currentIndex > 0) {
        setCurrentIndex(prev => prev - 1);
      } else if (direction === 'right' && currentIndex < testimonials.length - visibleCards) {
        setCurrentIndex(prev => prev + 1);
      }
    };
  
    return (
    
    <>
        
      <div className="testimonials-section">
        <div className="testimonial-wrapper">
          <h1>Testimonials</h1>
  
          <div className="arrows">
            <button onClick={() => handleSlide('left')} className="scroll-btn left">{'<'}</button>
            <button onClick={() => handleSlide('right')} className="scroll-btn right">{'>'}</button>
          </div>
  
          <div className="carousel-container">
            <div
              className="testimonial-cards"
              style={{ transform: `translateX(-${currentIndex * (100 / visibleCards)}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div className="testimonial-card" key={index}>
                  <div className="testimonial-content">
                    <p>{testimonial.review}</p>
                  </div>
                  <div className="testimonial-footer">
                    <img src={ReviewIcon} alt="review icon" className="review-icon" />
                    <div className="testimonial-text">
                      <span className="testimonial-name">{testimonial.name}</span>
                      <p>{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    
        {/* Contact Section */}

    <div className='contact-container'>
        <div className='contact-wrapper'>
            <div className='contact-form'>
                <div className='contact-txt-container'>
                    <h1>Ready to Build the Future? <br/> Let’s Make It Happen</h1>
                    <p>Your breakthrough idea deserves a world-class execution. Partner with T²C and transform your vision into reality.</p>
                </div>
                <form className='contact-main-form'>
                  <div className='input-details'>
                    <div className='details-container'>
                        <div className='fname'>
                            <label>First Name</label>
                            <input type='text' name='fname' placeholder='First Name'/>
                        </div>
                        <div className='lname'>
                            <label>Last Name</label>
                            <input type='text' name='lname' placeholder='Last Name'/>
                        </div>
                    </div>
                    <div className='details-container'>
                        <div className='email'>
                            <label>Email</label>
                            <input type='email' name='email' placeholder='Email ID'/>
                        </div>
                        <div className='phone'>
                            <label>Phone Number</label>
                            <input type='tel' name='phone' placeholder='+1-202-555-0174'/>
                        </div>
                    </div>
                    </div>
                    <button>Send Now</button>
                </form>

            </div>

            <div className='contact-details'>
                <div className='contact-details-wrapper'>
                    <img src={LocationIcon} alt='location-icon' className='contact-icon'/>
                    <div className='contact-text'>
                        <h1>Location</h1>
                        <p>Turbostart Technology Development Centre Pvt Ltd</p>
                        <p>CIN: U72900TZ2022PTC029746</p>
                        <p>Addres: 1st Floor, Mayflower Valencia,Avinashi Road,Coimbatore -641004, TN, IN</p>
                        
                    </div>
                </div>
                <div className='contact-details-wrapper'>
                    <img src={HeadSetIcon} alt='headset-icon' className='contact-icon'/>
                    <div className='contact-text'>
                    <h1>Contact Number</h1>
                    <p>
                       +91 7598 443 162
                    </p>
                    </div>
                </div>
                <div className='contact-details-wrapper'>
                    <img src={MailIcon} alt='mail-icon' className='contact-icon'/>
                    <div className='contact-text'>
                    <h1>Email Address</h1>
                    <p>
                    t2c@tsquaredc.com
                    </p>
                    </div>
                </div>
            </div>
           
        </div>
    </div>
    </>
    )
  }
  
  export default Testimonials;
