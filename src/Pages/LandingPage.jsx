import React from 'react';
import Navbar from '../Components/Navbar';
import TopContainer from '../Components/TopContainer';
import TechnologyAndAbout from'../Components/Technology';
import WhyChoose from '../Components/WhyChoose';
import Testimonials from '../Components/Testimonials';
import Footer from '../Components/Footer';
import '../Styles/LandingPage.css';

function LandingPage() {
    return (
        <div className='landing-page-container'>
            <div className='landing-page-wrapper'>
                <Navbar />
                <TopContainer />
                <TechnologyAndAbout />
                <WhyChoose/>
                <Testimonials />
                <Footer />
            </div>   
        </div>
          
    );
}

export default LandingPage;
