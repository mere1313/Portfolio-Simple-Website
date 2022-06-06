import React from 'react'
import Icon1 from '../../images/mere1.png'
import Icon2 from '../../images/mere4.png'
import Icon3 from '../../images/mere2.png'
import {
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP
} from './ServiceElements';

const Services = () => {
  return (
    <>
    <ServicesContainer id="services">
        <ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>.NET CORE</ServicesH2>
                    <ServicesP>This is my progress in C# language</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>JAVA</ServicesH2>
                    <ServicesP>This is my progress in React language</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>FLUTTER</ServicesH2>
                    <ServicesP>This is my progress in Flutter language</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesH1>
    </ServicesContainer>
    </>
  )
}

export default Services