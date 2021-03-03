import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import RegistrationSection from '../components/RegistrationSection';
import Footer from '../components/Footer';
import ScheduleSection from '../components/ScheduleSection';
import FaqSection from '../components/FaqSection';
import TeamSection from '../components/TeamSection';
import SponsorsSection from '../components/SponsorsSection';


const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle} />
            <HeroSection />
            <InfoSection/>
            <RegistrationSection />
            <ScheduleSection />
            <SponsorsSection />
            <FaqSection />
            <TeamSection />
            <Footer />
        </div>
    );
};

export default Home
