import React from 'react'
import Video from '../../video/video.mp4'

import { 
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroP,
    HeroH1,
    HeroContent,
    HeroBtnWrapper} from './HeroElements'

const HeroSection = () => {

  return (
    <HeroContainer id="home">
    <HeroBg>
    <VideoBg autoPlay loop muted src=
    {Video} type='video/mp4'/>   
    </HeroBg> 
    <HeroContent>
    <HeroH1>Dimitrios Merentitis</HeroH1>
    <HeroP>
     Software Engineer
    </HeroP> 
    <HeroP>
     Integrated Master University Of West Attica
    </HeroP> 
    <HeroBtnWrapper>
    </HeroBtnWrapper>  
    </HeroContent>  
    </HeroContainer>
  )
}

export default HeroSection