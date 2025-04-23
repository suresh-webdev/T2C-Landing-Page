import React,{useState,useEffect} from 'react';
import '../Styles/LandingPage.css';
import TSBridgeLogo from '../assets/ts-bridge.png';
import PiChainLogo from '../assets/pichain.png';
import Ken42Logo from '../assets/ken-42.png';
import OptimileLogo from '../assets/optimile.png';
import AnimationImage1 from '../assets/Group1.png';
import AnimationImage2 from '../assets/Group2.png';
import AnimationImage3 from '../assets/Group3.png';
import AnimationImage4 from '../assets/Group4.png';
import BgSpiral from '../assets/Container.png';
import Board1 from '../assets/board_1.png';
import Board2 from '../assets/ken42_board.png';
const initialData = [
    { title: 'Flexible, On-Demand', content: 'Our proprietary accelerators cut development time, helping you get to market faster.', image: AnimationImage1 },
    { title: 'Faster Builds', content: 'Our proprietary accelerators cut development time, helping you get to market faster.', image: AnimationImage2 },
    { title: 'AI-Driven Solutions', content: 'Our proprietary accelerators cut development time, helping you get to market faster.', image: AnimationImage3 },
    { title: 'End-to-End Development', content: 'Our proprietary accelerators cut development time, helping you get to market faster.', image: AnimationImage4 }
];


const TopContainer = () => {

    const [cardData, setCardData] = useState(initialData);

    useEffect(() => {
        const interval = setInterval(() => {
            setCardData(prev => {
                const newData = [...prev];
                const last = newData.pop();
                newData.unshift(last);
                return newData;
            });
        }, 3000); 

        return () => clearInterval(interval);
    }, []);


    return (
        <>
        
        <div className="landing-wrapper">
            <div className="heading-wrapper">
                <div className='title-container'>
                    <h1 className='title-first-heading'>The Future of Tech</h1>
                    <h1 className='title-second-heading'>Starts Here</h1>
                    <p className='title-paragraph'>From concept to market, T²C supercharges your tech journey with top-tier talent, cutting-edge tools, and rapid execution. Let's build groundbreaking solutions that define tomorrow.</p>
                    <label className='title-label'>Let’s Build Something Extraordinary</label>
                </div>

                <div className='company-logo-container'>
                    <div className='company-logo-text'>
                        <h4>TRUSTED BY THE BEST</h4>
                    </div>
                    <div className='company-logo-img-container'>
                        <img className='company-logo' src={TSBridgeLogo} alt="TS Bridge" />
                        <img className='company-logo' src={PiChainLogo} alt="PiChain" />
                        <img className='company-logo' src={Ken42Logo} alt="Ken42" />
                        <img className='company-logo' src={OptimileLogo} alt="Optimile" />
                    </div>
                </div>        
            </div>
        
            <div className="animation-wrapper">
                {cardData.map((item, idx) => (
                    <div className={`animation-card ${idx === cardData.length - 1 ? 'animation-card-last' : ''}`} key={`${item.title}-${item.image}-${idx}`}>
                         <div className="animation-card-content fade-transition show">
                            <h4>{item.title}</h4>
                            {idx === 3 && <p>{item.content}</p>}
                            <img className="animation-img" src={item.image} alt={`Animation ${idx + 1}`} />
                        </div>
                    </div>
                ))}

              
            </div>

            <div className="animation-wrapper-mobile">
                <div className="animation-card-mobile">
                    <img className="animation-img-mobile main-img" src={cardData[0].image} alt={cardData[0].title} />
                    <div className="animation-card-content-mobile">
                        <h4>{cardData[0].title}</h4>
                        <p>{cardData[0].content}</p>
                    </div>
                </div>

        
                <div className="animation-card-mobile-others">
                    {cardData.slice(1).map((item, idx) => (
                    <div className="animation-child-card  fade-transition show" key={`${item.title}-${item.image}-${idx}`}>
                        <img className="animation-img-mobile" src={item.image} alt={item.title} />
                        <h4>{item.title}</h4>
                    </div>
                    ))}
                </div>  
            </div>


        </div>

        {/* Pattern Container */}
        <div className='spiral-container'>
            <img className='bg-spiral' src={BgSpiral} alt="Spiral" />
        </div> 
        
        {/* Innovation Section */}
        <div className='innovation-container'>
            <div className='innovation-wrapper'>
                <h1>Innovation in Action</h1>
                <p> 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nulla velit, maximus sit amet suscipit in, fermentum id est. Suspendisse consequat ornare elit.
                </p>
                
                <div className='board-container'>
                <div className='chart-container'>
                    <div className='chart-wrapper'>
                    <img className='chart-img' src={Board1} alt="Ken42_img" />
                    <div className='chart-text-container'>
                        <h4 className='chart-heading'>Revolutionized Kenverse’s AI capabilities in just 6 months</h4>
                        <p className='chart-paragraph'>From concept to deployment, T²C engineered an AI transformation that positioned Kenverse as a market leader.</p>
                    </div>
                    </div>
                </div>

                <div className='chart-container'>
                <div className='chart-wrapper'>
                    <img className='chart-img' src={Board2} alt="Ken42_img" />
                    <div className='chart-text-container'>
                        <h4 className='chart-heading'>Transformed Optimile into a seamless logistics powerhouse</h4>
                        <p className='chart-paragraph'>Reimagined and redefined by T²C, Optimile now sets the standard for seamless logistics.</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div> 
               
    </>
    );
}

export default TopContainer;
