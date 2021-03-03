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
                        dictionary={{ english: "codeW 2021", russian: "codeW 2021", kazakh: "codeW 2021" }}
                    />
                </HeroH1>
                
                <HeroP>
                <TranslatableText
                        dictionary={{ english: "Annual Coding Marathon for Females", russian: "Ежегодное Соревнование по Программированию среди Девушек", kazakh: "Жыл Сайын Өтетін Қыздарға Арналған Бағдарламалау Марафоны" }}
                    />
                </HeroP>
                <HeroBtnWrapper>
                    <Button type="button" to='registration' 
                    smooth={true} 
                    duration={500} 
                    spy={true} 
                    exact="true" 
                    //offset={-80}
                    onMouseEnter={onHover} 
                    onMouseLeave={onHover} 
                    primary='true' 
                    dark='true'>
                        <TranslatableText
                        dictionary={{ english: "I'm in!", russian: "Хочу участвовать!", kazakh: "Қатысамын!" }}
                        />
                    {hover ? <ArrowForward/> : <ArrowRight/>}</Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection

