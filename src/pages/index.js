import React ,{useState} from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import Services from '../components/Services';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/infoSection';
import { homeObjOne, homeObjTwo ,homeObjThree } from '../components/infoSection/Data';

const Home = () => {

    const [isOpen , setIsOpen] = useState(false)

    const toggle = () =>{
        setIsOpen(!isOpen)
    };
  return (
    <>
    <Sidebar isOpen={isOpen} toggle={toggle}/>
    <Navbar toggle={toggle} />
    <HeroSection />
    <InfoSection {...homeObjOne} />
    <Services />
    <InfoSection {...homeObjTwo} />
    <Services />
    <InfoSection {...homeObjThree} />
    <Services />
    <Footer />
    </>
  );
};

export default Home
