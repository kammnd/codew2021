import React from 'react'
import { 
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    ImgWrap,
    Img,
    List 
} from './InfoElements'


import TranslatableText from '../../context/TranslatableText';

const InfoSection = () => {
    return (
        <div>
            <InfoContainer lightBg={false} id={'about'}>
                <InfoWrapper>
                    <InfoRow imgStart={false}>
                        <Column1>
                            <TextWrapper>
                                <TopLine> 
                                    <TranslatableText
                                        dictionary={{ english: "About", russian: "О нас", kazakh: "Марафон туралы"}}
                                    />
                                </TopLine>
                                <Heading lightText={true}>
                                    <TranslatableText
                                            dictionary={{ english: "What is ", russian: "Что такое ", kazakh: ""}}
                                    />
                                     code<span style={{color: "#FF6F60", fontFamily: 'Raleway'}}>W</span> 
                                     <TranslatableText
                                            dictionary={{ english: "", russian: "", kazakh: " дегеніміз не"}}
                                    /> ?
                                </Heading>
                                <Subtitle darkText={false}>
                                <TranslatableText
                                        dictionary={{ 
                                            english: "The first and the only 3 hour coding contest for females in Kazakhstan, which is held in English, Russian and Kazakh!", 
                                            russian: "Первый и единственный трехчасовой марафон по программированию для женщин в Казахстане, который проводится на английском, русском и казахском языках!", 
                                            kazakh: "Қазақстанда ағылшын, орыс және қазақ тілінде өткізілетін қыздарға арналған бірінші 3 сағаттық бағдарламалау жарысы!" 
                                        }}
                                />
                                </Subtitle>
                                <Heading lightText={true}>
                                    <TranslatableText
                                            dictionary={{ 
                                                english: "Last year's statistics: ", 
                                                russian: "В прошло году мы получили: ", 
                                                kazakh: "Алдыңғы жылдың нәтижелері: " 
                                            }}
                                    />
                                </Heading>
                                <List darkText={false}>- 
                                    <span style={{color: "#FF6F60", fontFamily: 'Raleway', fontSize: 25, }}> 223 </span>
                                    <TranslatableText
                                            dictionary={{ 
                                                english: "applications", 
                                                russian: "заявок", 
                                                kazakh: "қатысу өтінімдері" 
                                            }}
                                    /> 
                                </List>
                                <List darkText={false}>- 
                                    <span style={{color: "#FF6F60", fontFamily: 'Raleway', fontSize: 25, }}> 150 </span> 
                                    <TranslatableText
                                            dictionary={{ 
                                                english: "participants", 
                                                russian: "участников", 
                                                kazakh: "қатысушы" 
                                            }}
                                    /> 
                                </List>
                                <List darkText={false}>- 
                                    <TranslatableText
                                            dictionary={{ 
                                                english: " Sponsored by", 
                                                russian: " Спонсорство от", 
                                                kazakh: " Бас демеушіміз -" 
                                            }}
                                    />
                                    <span style={{color: "#FF6F60", fontFamily: 'Raleway', fontSize: 25, }}> Facebook </span>
                                    <TranslatableText
                                            dictionary={{ english: "", russian: "", kazakh: " компаниясы" }}
                                    />
                                </List>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={require('../../images/codeW-bird.png').default} alt={'bird'}/>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </div>
    )
}

export default InfoSection
