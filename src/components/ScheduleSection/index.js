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
    ImgWrap,
    Img,
    RowWrapper, 
    List,
} from './ScheduleElements'
import TranslatableText from '../../context/TranslatableText';


const ScheduleSection = () => {
    return (
        <div>
            <InfoContainer lightBg={false} id={'schedule'}>
                <InfoWrapper>
                    <InfoRow imgStart={false}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>
                                    <TranslatableText
                                        dictionary={{ english: "Schedule", russian: "Расписание", kazakh: "Кесте"}}
                                    />
                                </TopLine>
                                <Heading lightText={true}>
                                    <TranslatableText
                                        dictionary={{ english: "Date & Time", russian: "Дата и Время", kazakh: "Күні мен Уақыты"}}
                                    />
                                </Heading>
                                <RowWrapper>
                                    <List darkText={false}>
                                    <TranslatableText
                                        dictionary={{ english: "Registration:", russian: "Регистрация:", kazakh: "Тіркелу:"}}
                                    />
                                     <span style={{ color: "#FF6F60", fontFamily: 'Raleway', fontSize: 24 }}>
                                        <TranslatableText
                                            dictionary={{ english: " March 8 ", russian: " Март 8 ", kazakh: " Наурыздың 8 "}}
                                        /> 
                                    </span>-
                                    <span style={{ color: "#FF6F60", fontFamily: 'Raleway', fontSize: 24 }}> 
                                        <TranslatableText
                                            dictionary={{ english: " March 21 ", russian: " 21 ", kazakh: " 21 "}}
                                        />
                                    </span>
                                    <TranslatableText
                                            dictionary={{ english: "", russian: "", kazakh: "аралығы"}}
                                        />
                                    </List>
                                    <List darkText={false}>
                                    <TranslatableText
                                        dictionary={{ english: "Qualification test:", russian: "Тест на уровень:", kazakh: "Деңгейді анықтау тесті:"}}
                                    />
                                    <span style={{ color: "#FF6F60", fontFamily: 'Raleway', fontSize: 24 }}>
                                        <TranslatableText
                                            dictionary={{ english: " March 22 ", russian: " Март 22 ", kazakh: " Наурыздың 22 "}}
                                        /> 
                                    </span>-
                                    <span style={{ color: "#FF6F60", fontFamily: 'Raleway', fontSize: 24 }}> 
                                        <TranslatableText
                                            dictionary={{ english: " March 29 ", russian: " 29 ", kazakh: " 29 "}}
                                        />
                                    </span>
                                    <TranslatableText
                                            dictionary={{ english: "", russian: "", kazakh: "аралығы"}}
                                        />
                                    </List>
                                </RowWrapper>
                                <RowWrapper>
                                    <List darkText={false}>
                                        <TranslatableText
                                            dictionary={{ english: "Contest date: ", russian: "Дата соревнования: ", kazakh: "Жарыс күні: "}}
                                        />
                                        <span style={{ color: "#FF6F60", fontFamily: 'Raleway', fontSize: 24 }}> 
                                            <TranslatableText
                                                dictionary={{ english: "10th of April", russian: "10 Апреля", kazakh: "Сәуірдің 10-ы"}}
                                            />
                                        </span>
                                    </List>
                                    <List darkText={false}>
                                        <TranslatableText
                                            dictionary={{ english: "Contest time: ", russian: "Время соревнования: ", kazakh: "Жарыс уақыты: "}}
                                        />
                                        <span style={{ color: "#FF6F60", fontFamily: 'Raleway', fontSize: 24 }}> 
                                        <TranslatableText
                                                dictionary={{ english: "TBA", russian: "Будет объявлено позже", kazakh: "Жақында жарияланатын болады"}}
                                            />
                                        </span>
                                    </List>
                                </RowWrapper>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={require('../../images/codew-sticker.png').default} alt={'girl'}/>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </div>
    )
}

export default ScheduleSection
