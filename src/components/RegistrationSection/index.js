import React from 'react'
import { Button } from '../ButtonElements'
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
    BtnWrap, 
    ImgWrap,
    Img,
    List 
} from './RegistrationElements'
import TranslatableText from '../../context/TranslatableText';


const RegistrationSection = () => {
    return (
        <div>
            <InfoContainer lightBg={true} id={'registration'}>
                <InfoWrapper>
                    <InfoRow imgStart={true}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>
                                    <TranslatableText
                                        dictionary={{ english: "Registration", russian: "Регистрация", kazakh: "Тіркелу"}}
                                    />
                                </TopLine>
                                <Heading lightText={false}> 
                                    <TranslatableText
                                        dictionary={{ english: "Process & Eligibility ", russian: "Процесс и правила отбора", kazakh: "Тіркелу барысы мен талаптары"}}
                                    />
                                </Heading>
                                <Subtitle darkText={true}>
                                    <TranslatableText
                                        dictionary={{ english: "The application process consists of 2 steps:", russian: "Процесс подачи заявки состоит из 2 этапов:", kazakh: "Тіркелу процессі 2 қадамнан тұрады:"}}
                                    />
                                </Subtitle>
                                <List darkText={true}>
                                    <TranslatableText
                                        dictionary={{ 
                                            english: "1. Fill the application form by ", 
                                            russian: "1. Заполните форму заявки до ", 
                                            kazakh: "1. Өтінім беру формасын "
                                        }}
                                    />
                                    <span style={{color: "#FF6F60", fontFamily: 'Raleway', fontSize: "20px"}}>
                                        <TranslatableText
                                            dictionary={{ 
                                                english: "11:59 PM March 21, 2021", 
                                                russian: "23:59, 21 марта 2021 года", 
                                                kazakh: "2021 жылдың 21-ші наурызы, кешкі сағат 11:59-ға дейін "}}
                                        />
                                    </span>
                                    <TranslatableText
                                            dictionary={{ english: ".", russian: ".", kazakh: "толтырыңыз."}}
                                        />
                                </List>
                                <List darkText={true}>
                                    <TranslatableText
                                            dictionary={{ english: "2. On ", russian: "2. ", kazakh: "2. "}}
                                        />
                                    <span style={{color: "#FF6F60", fontFamily: 'Raleway', fontSize: "20px"}}>
                                        <TranslatableText
                                            dictionary={{ 
                                                english: "22nd of March", 
                                                russian: "22 марта", 
                                                kazakh: "Наурыздың 22-сі"}}
                                        />
                                    </span>
                                    <TranslatableText
                                        dictionary={{ 
                                            english: " you will receive the link to the HackerRank test, the results of which will determine you to one of the tracks - Novice/Experienced/Advanced. You will have one week to solve the contest.", 
                                            russian: " вы получите ссылку на HackerRank тест, по результатам которого вы будете распределены на один из уровней - Новичок / Средний / Продвинутый. На решение данного теста у вас будет одна неделя.", 
                                            kazakh: " тіркелген поштаңызға НackerRank платформасындағы тестке сілтеме аласыз. Тест нәтижесі бойынша сіздің деңгейіңіз анықталады - бастауыш, орта не ілгерінді. Тестті орындауға 1 апта уақыт беріледі."
                                        }}
                                    />
                                </List>
                                <Subtitle darkText={true}>
                                    <TranslatableText
                                        dictionary={{ 
                                            english: "Solving it is a mandatory step to participate in codeW 2021. Applicants who will not complete it will be disqualified from participation.", 
                                            russian: "Решение данного теста является обязательным условием для участия в codeW 2021. Кандидаты, не предпринявшие попытку решить его, будут отстранены от дальнейшего участия.", 
                                            kazakh: "Жіберілген тестті орындау codeW 2021 марафонына қатысу үшін міндетті қадам болып табылады. Тестті орындамаған үміткер ары қарай марафонға өткізілмейді."
                                        }}
                                    />
                                </Subtitle>
                                <Subtitle darkText={true}>
                                    <TranslatableText
                                            dictionary={{ 
                                                english: "The results of the HackerRank will be sent to your email on", 
                                                russian: "Результаты теста на определение уровня будут отправлены на вашу электронную почту", 
                                                kazakh: "HackerRank платформасындағы тест нәтижелері"}}
                                        />
                                    <span style={{color: "#FF6F60", fontFamily: 'Raleway', fontSize: "20px" }}>
                                        <TranslatableText
                                            dictionary={{ 
                                                english: " 3rd of April", 
                                                russian: " 3 апреля", 
                                                kazakh: " сәуірдің 3-і "}}
                                        />
                                    </span>
                                    <TranslatableText
                                        dictionary={{ 
                                            english: ".", 
                                            russian: ".", 
                                            kazakh: "күні сіздің электронды поштаңызға жіберіледі."
                                        }}
                                    />
                                    
                                </Subtitle>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={require('../../images/month_girl.png').default} alt={'girl'}/>
                            </ImgWrap>
                            <TextWrapper>
                                <Subtitle darkText={true} style={{marginBottom: '10px'}}>
                                code<span style={{color: "#FF6F60", fontFamily: 'Raleway'}}>W</span> 2021
                                    <TranslatableText
                                        dictionary={{ english: " is open to women who:", russian: " открыт для девушек, которые:", kazakh: ""}}
                                    />
                                </Subtitle>
                                <List darkText={true}>
                                    - 
                                    <TranslatableText
                                        dictionary={{ english: " are in the age between 16 to 25", russian: " в возрасте от 16 до 25 лет", kazakh: " жасы 16-25 аралығындағы"}}
                                    />
                                </List>
                                <List darkText={true}>
                                    - 
                                    <TranslatableText
                                        dictionary={{ english: " are citizens of Kazakhstan", russian: " являются гражданками Республики Казахстан", kazakh: " Қазақстан азаматтылығына ие"}}
                                    />
                                </List>
                                <List darkText={true}>
                                    - 
                                    <TranslatableText
                                        dictionary={{ english: " are highly motivated to meet a community of wonderful talented women!", russian: " мотивированы развиваться и готовы встретиться с сообществом талантливых девушек!", kazakh: " дарынды қыздар қауымымен танысуға дайын"}}
                                    />
                                </List>
                                <Subtitle darkText={true} style={{marginBottom: '10px'}}>
                                    <TranslatableText
                                        dictionary={{ english: "", russian: "", kazakh: " қыздарды қатысуға шақырады."}}
                                    />
                                </Subtitle>
                            </TextWrapper>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </div>
    )
}

export default RegistrationSection
