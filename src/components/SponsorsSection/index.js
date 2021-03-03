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
    ImgBirdWrap,
    ImgWrap,
    ImgMicro,
    ImgChoco,
    ImgPalantir,
    ImgEpam,
    ImgBird,
} from './SponsorsElements'
import TranslatableText from '../../context/TranslatableText';

const SponsorsSection = () => {
    return (
        <div>
            <InfoContainer lightBg={true} id={'sponsors'}>
                <InfoWrapper>
                    <InfoRow imgStart={false}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>
                                    <TranslatableText
                                        dictionary={{ english: "Sponsors", russian: "Спонсоры", kazakh: "Демеушілер" }}
                                    />
                                </TopLine>
                                <Heading lightText={false}>
                                    <TranslatableText
                                        dictionary={{ english: "Meet our Sponsors", russian: "В этом году нашими спонсорами являются", kazakh: "Біздің демеушілер" }}
                                    />
                                </Heading>
                            </TextWrapper>
                            <ImgWrap>
                                <ImgMicro src={require('../../images/microsoft.png').default} alt={'Microsoft Logo'}/>
                            </ImgWrap>
                            <ImgWrap>
                                <ImgPalantir src={require('../../images/palantir.jpg').default} alt={'Palantir Logo'}/>
                            </ImgWrap>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <ImgEpam src={require('../../images/epam.png').default} alt={'Epam Logo'}/>
                            </ImgWrap>
                            <ImgWrap>
                                <ImgChoco src={require('../../images/choco.png').default} alt={'Chocofamily Logo'}/>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                    <ImgBirdWrap>
                        <ImgBird src={require('../../images/bird_sboku.png').default} alt={'Wowan sboku'}/>
                    </ImgBirdWrap>
                </InfoWrapper>
            </InfoContainer>
           
        </div>
    )
}

export default SponsorsSection
