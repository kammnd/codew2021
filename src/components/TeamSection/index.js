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
    Logo, 
    LogoWrap,
    TextLogoRow,
    Col1,
    Col2
} from './TeamElements'

import TranslatableText from '../../context/TranslatableText';

const TeamSection = () => {
    return (
        <div>
            <InfoContainer lightBg={true} id={'ourteam'}>
                <InfoWrapper>
                    <InfoRow imgStart={true}>
                        <Column1>
                            <TextWrapper>
                                <TextLogoRow>
                                    <Col1>
                                        <TopLine>
                                            <TranslatableText
                                                dictionary={{ english: "Our Team", russian: "О Нас", kazakh: "Бiз туралы"}}
                                            />
                                        </TopLine>
                                        <Heading lightText={false}>
                                            <TranslatableText
                                                dictionary={{ english: "Who did it all?", russian: "Организаторы", kazakh: "Ұйымдастырушылар"}}
                                            />
                                        </Heading>
                                    </Col1>
                                    <Col2>
                                        <LogoWrap>
                                            <Logo src={require('../../images/acmw-logo.png').default} alt={'ACM W logo'}/>
                                        </LogoWrap>
                                    </Col2>
                                </TextLogoRow>
                                <Subtitle darkText={true}>
                                    <TranslatableText
                                        dictionary={{ 
                                            english: "NU ACM-W SC is the first Kazakhstani branch of the largest international organization which aims to provide social and professional support for women in computer technology, computer science, and engineering, as well as to facilitate their technical growth by organizing different activities.", 
                                            russian: "NU ACM-W SC - это первая Казахстанская ветвь самой большой интернациональной организации, которая нацелена на оказание социальной и профессиональной поддержки женщинам в области компьютерных технологий, информатики и инженерии, а также содействие их техническому росту путем организации различных видов деятельности.", 
                                            kazakh: "NU ACM-W SC - бұл алғашқы Қазақстандық бұтағы ең үлкен интернационалдық ұйым, компьютерлік технологиялар, информатика және инженерия саласында әйелдерге әлеуметтік және кәсіби қолдау көрсетуге, сондай-ақ, әртүрлі қызмет түрлерін ұйымдастыру жолымен олардың техникалық дамуына жәрдемдесуге бағытталған."}}
                                    /> 
                                </Subtitle>
                                <Subtitle darkText={true}>
                                    <TranslatableText
                                            dictionary={{ 
                                                english: "We would also like to thank ", 
                                                russian: "Выражаем благодарность талантливой ", 
                                                kazakh: "Оған қоса, біз деңгейді анықтайтын тесттің есептерін құрастыруда үлкен үлесін қосқан MIT университетінің түлегі және Google компаниясының инженері "
                                            }}
                                    />
                                    <span style={{color: "#FF6F60", fontFamily: 'Raleway', fontSize: '20px'}}>Madeline Zhang</span>
                                    <TranslatableText
                                            dictionary={{ 
                                                english: ", MIT graduate and Software Engineer from Google, for her enormous help with creating the qualification round test!", 
                                                russian: ", выпускнице MIT, а также разработчице из Google, которая помогала нам составлять контест на уровень!", 
                                                kazakh: "-қа үлкен алғысымызды білдіреміз."
                                            }}
                                    />
                                </Subtitle>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={require('../../images/team_photo.jpg').default} alt={'ACM W team'}/>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </div>
    )
}

export default TeamSection
