import React from 'react'
import { 
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    Column2,
    TextWrapper1,
    TopLine,
    Heading,
    Subtitle,
    TextWrapper2
} from './FaqElements'
import TranslatableText from '../../context/TranslatableText';


const FaqSection = () => {
    return (
        <div>
            <InfoContainer lightBg={false} id={'faq'}>
                <InfoWrapper>
                    <InfoRow imgStart={false}>
                        <Column1>
                            <TextWrapper1>
                                <TopLine>
                                    <TranslatableText
                                        dictionary={{ english: "FAQ", russian: "Вопросы-Ответы", kazakh: "Сұрақ-Жауап"}}
                                    />
                                    </TopLine>
                                <Heading lightText={true}>
                                    <TranslatableText
                                        dictionary={{ english: "Who can participate ?", russian: "Кто может участвовать в соревновании?", kazakh: "Кім қатыса алады?"}}
                                    />
                                </Heading>
                                <Subtitle darkText={false}>
                                    <TranslatableText
                                        dictionary={{ 
                                            english: "Everyone of age 16 to 25 who identify themselves female is welcome to participate. You don’t need to be a Nazarbayev University student.", 
                                            russian: "Девушки в возрасте от 16 до 25 приветствуются для участия в соревновании. Вам не обязательно быть студентом Назарбаев Университета.", 
                                            kazakh: "Жарысқа 16 мен 25 жас аралығындағы өздерін әйел ретінде анықтайтын кез келген адам қатыса алады. Назарбаев Университетінің студенті болуыңыз міндетті емес."
                                        }}
                                    />
                                </Subtitle>
                                <Heading lightText={true}>
                                    <TranslatableText
                                        dictionary={{ english: "Can I participate if I am new to programming ?", russian: "Можно ли участвовать, если я новичок в программировании?", kazakh: "Мен бағдарламалауға жаңа болсам, маған қатысуға бола ма?"}}
                                    />   
                                </Heading>
                                <Subtitle darkText={false}>
                                    <TranslatableText
                                        dictionary={{ 
                                            english: "Yes, we encourage everyone interested in programming to join us.  All you need to know is the basics of at least one Object-oriented programming language.", 
                                            russian: "Да, мы приглашаем всех, кто интересуется программированием, присоединиться к нам.  Все, что вам нужно знать, - это основы, как минимум, одного языка программирования.", 
                                            kazakh: "Иә, біз бағдарламалауға қызығушылығы бар әр адамды бізге қосылуға шақырамыз. Сізге ең болмағанда бір объектіге-бағытталған бағдарламалау тілі негіздерін білу қажет."
                                        }}
                                    />
                                </Subtitle>
                                <Subtitle darkText={false}>
                                    <TranslatableText
                                        dictionary={{ 
                                            english: "There will be three tracks depending on your level: novice, intermediate, experienced (see details above). Your level will be determined according to the results of qualifier test on HackerRank.", 
                                            russian: "В соревновании будет три уровня: начинающий, средний и продвинутый. Ваш уровень будет определен посредством теста, который мы вышлем участницам после регистрации.", 
                                            kazakh: "Жарыста қатысушылардың бағдарламалау деңгейлеріне байланысты 3 бағыт болады: бастауыш, орта және ілгерінді (толық ақпарат жоғарыда).Сіздің деңгейіңіз HackerRank платформасындағы деңгейді анықтайтын тест нәтижесінен кейін белгілі болады."
                                        }}
                                    />
                                </Subtitle>
                                <Heading lightText={true}>
                                    <TranslatableText
                                        dictionary={{ english: "Where will ", russian: "Где будет проходить соревнование ", kazakh: ""}}
                                    />
                                    code<span style={{color: "#FF6F60", fontFamily: 'Raleway'}}>W</span>
                                    <TranslatableText
                                        dictionary={{ english: " be held ?", russian: "?", kazakh: " қай жерде өтеді?" }}
                                    />
                                </Heading>
                                <Subtitle darkText={false}>
                                    <TranslatableText
                                        dictionary={{ english: "Our event will be completely online!", russian: "Соревнование будет проходить в онлайн формате!", kazakh: "Біздің іс-шара толықтай онлайн форматта өтеді!"}}
                                    />
                                </Subtitle>
                            </TextWrapper1>
                        </Column1>
                        <Column2>
                            <TextWrapper2>
                                <Heading lightText={true}>
                                    <TranslatableText
                                        dictionary={{ english: "Do I have to know English ?", russian: "Мне обязательно знать английский для участия?", kazakh: "Маған ағылшын тілін білу міндетті ме?"}}
                                    />
                                </Heading>
                                <Subtitle darkText={false}>
                                    <TranslatableText
                                        dictionary={{ english: "No, you don’t have to. ", russian: "В этом нет необходимости. ", kazakh: "Жоқ, міндетті емес. "}}
                                    />
                                <span style={{ fontFamily: 'Raleway'}}>code<span style={{color: "#FF6F60", fontFamily: 'Raleway'}}>W</span></span> 
                                    <TranslatableText
                                        dictionary={{ 
                                            english: "will be held in three different languages: English, Kazakh, and Russian. All tasks and materials from workshops will be translated into Russian and Kazakh languages.", 
                                            russian: "пройдет на трех языках: английском, казахском и русском. Все задания и материалы будут также переведены на русский и казахский языки.", 
                                            kazakh: "3 тілде өткізіледі: қазақ, орыс және ағылшын. Барлық тапсырмалар және мастер-класс материалдары қазақ және орыс тілдеріне аударылатын болады."}}
                                    />
                                </Subtitle>
                                <Heading lightText={true}>
                                    <TranslatableText
                                        dictionary={{ english: "How do I know which track is suitable for me?", russian: "Как узнать, какой уровень мне подходит?", kazakh: "Менің деңгейім қандай бағытқа сәйкес келетінін қалай білемін?"}}
                                    />
                                </Heading>
                                <Subtitle darkText={false}>
                                    <TranslatableText
                                        dictionary={{ 
                                            english: "If you got selected, you will receive a link to the preliminary challenge that will identify your level and we will match you to a suitable track.", 
                                            russian: "Если вы будете отобраны для участия в соревновании, вы получите ссылку на предварительный тест, который определит ваш уровень.", 
                                            kazakh: "Тіркелуден кейін поштаңызға деңгейді анықтайтын тапсырмаларға сілтеме аласыз. Тест нәтижесіне сәйкес сізге сай бағыт таңдалады."}}
                                    />
                                </Subtitle>
                                <Heading lightText={true}>
                                    <TranslatableText
                                        dictionary={{ english: "What programming languages are accepted in the contest ?", russian: "Какие языки программирования могут быть использованы/принимаются на соревновании?", kazakh: "Жарысты қандай бағдарламалау тілдерінде жазуға болады?"}}
                                    />
                                </Heading>
                                <Subtitle darkText={false}>
                                    <TranslatableText
                                        dictionary={{ 
                                            english: "The contest will be held using a special platform where all commonly used programming languages are supported (e.g. Java, Python, C++ but not Prolog, OCaml, etc.)", 
                                            russian: "Конкурс будет проводиться с использованием специальной платформы, на которой поддерживаются все распространенные языки программирования.", 
                                            kazakh: "Марафон жиі пайдаланылатын бағдарламалау тілдерін қолдайтын арнайы платформада өткізіледі (мысалы, Java, Python, C++, бірақ Prolog, OCaml сияқты тілдер емес)."}}
                                    />
                                </Subtitle>
                                <Heading lightText={true}>
                                    <TranslatableText dictionary={{ english: "Is it free ?", russian: "Участие в соревновании бесплатное?", kazakh: "Қатысу тегін бе?"}}
                                    />
                                </Heading>
                                <Subtitle darkText={false}>
                                    <TranslatableText dictionary={{ english: "Yes, it is absolutely free.", russian: "Да, все абсолютно бесплатно.", kazakh: "Иә, жарысқа қатысу толықтай тегін."}}
                                    />
                                </Subtitle>
                            </TextWrapper2>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </div>
    )
}

export default FaqSection
