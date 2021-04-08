import React, {useState} from 'react';
import WhyUse from '../components/WhyUse';
import HomeSection from '../components/HomeSection';
import Navbar from '../components/Navbar';
import OurServices from '../components/OurServices';
import HowItWorks from '../components/HowItWorks';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import './pagesCss/index.css';

const Home = () => {
  //Close and open navBar mobile
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <div className="containerIndexMain">
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <HomeSection />
        <OurServices />
        <WhyUse />
        <HowItWorks />
        <Footer />
      </div>
    </>
  );
};

export default Home;

