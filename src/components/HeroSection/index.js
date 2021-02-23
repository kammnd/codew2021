import React, {useState} from 'react';
import Video from '../../videos/video.mp4';
import { Button } from '../ButtonElements';
import { 
    HeroContainer, 
    HeroBg, 
    VideoBg, 
    HeroContent, 
    HeroH1, 
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight,
} from './HeroElements';

import TranslatableText from '../../context/TranslatableText';

    const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
            </HeroBg>
            <HeroContent>
                <HeroH1>
                    <TranslatableText
                        dictionary={{ english: "Welcome!", russian: "Привет!", kazakh: "Сәлем!" }}
                    />
                </HeroH1>
                
                <HeroP>Do not miss an opportunity to participate in the Programming contest for girls.</HeroP>
                <HeroBtnWrapper>
                    <Button type="button" onClick={(e) => { e.preventDefault(); 
                    window.location.href="https://docs.google.com/forms/d/e/1FAIpQLSf7-DIfW8sBtZiEogRiQ0VrzMVe4668JtHC6u1VM49nuR_peg/viewform?usp=sf_link";}}
                    onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'>
                        I'm in!{hover ? <ArrowForward/> : <ArrowRight/>}</Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection

