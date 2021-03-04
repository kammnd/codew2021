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
    ImgWrap1,
    ImgWrap2,
    ImgWrap3,
    ImgWrap4,
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
                                        dictionary={{ english: "Meet our Sponsors", russian: "Нашими спонсорами являются", kazakh: "Біздің демеушілер" }}
                                    />
                                </Heading>
                            </TextWrapper>
                            <ImgWrap1>
                                <ImgMicro src={require('../../images/microsoft_logo.png').default} alt={'Microsoft Logo'} />
                            </ImgWrap1>
                            <ImgWrap2>
                                <ImgEpam src={require('../../images/epam_logo.png').default} alt={'Epam Logo'} />
                            </ImgWrap2> 
                        </Column1>
                        <Column2>
                        <ImgBird src={require('../../images/bird_sboku.png').default} alt={'Wowan sboku'}/>
                        <ImgWrap3>
                                <ImgPalantir src={require('../../images/palantir_logo.png').default} alt={'Palantir Logo'}/>
                            </ImgWrap3>
                            <ImgWrap4>
                                <ImgChoco src={require('../../images/choco_logo.png').default} alt={'Chocofamily Logo'}/>
                            </ImgWrap4>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
           
        </div>
    )
}

export default SponsorsSection
