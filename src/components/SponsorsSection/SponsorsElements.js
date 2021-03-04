import styled from 'styled-components';

export const InfoContainer = styled.div`
    color: #ffffff;
    background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#010606')};

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`;

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 860px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: stretch;
`;

export const InfoRow = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-items: stretch;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'` )};

    @media screen and (max-width: 768px) {
        grid-template-areas:  ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    }
`;

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 25px;
    grid-area: col1;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;

    @media screen and (max-width: 768px) {
        margin-bottom: 10px;
        grid-template-rows: 1fr 150px 150px;
    }

    @media screen and (max-width: 480px) {
        grid-template-rows: 1fr 130px 150px;
        margin-bottom: 0px;
    }
`;

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 25px;
    grid-area: col2;
    display: grid;
    grid-template-rows: 232px 150px 220px; //minmax(1rf, auto, auto);
    row-gap: 0px;

    @media screen and (max-width: 768px) {
        padding-top: 0;
        grid-template-rows: 140px 130px;
    }
`;

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
    justify-self: start;
`;

export const TopLine = styled.p`
    color: #ff5349;
    font-size: 18px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-top: 16px;
`;

export const Heading = styled.h1`
    margin-top: 24px;
    font-size: 32px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({ lightText }) => ( lightText ? '#f7f8f8' : '#010606')};
    font-family: 'Raleway', sans-serif;

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;

export const Subtitle = styled.p`
    max-width: 440px;
    margin-top: 30px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${({darkText}) => (darkText ?  '#010606' : '#fff')};
`;

export const ImgWrap1 = styled.div`
    max-width: 555px;
    height: 100%;
`;

export const ImgWrap2 = styled.div`
    max-width: 555px;
    height: 100%;
    padding-left: 20px;
    @media screen and (max-width: 768px) {
        padding: 0;
        margin-left: -30px;
    }
`;

export const ImgWrap3 = styled.div`
    max-width: 555px;
    height: 100%;
    padding-left: 60px;

    @media screen and (max-width: 768px) {
        padding-left: 0;
    }
`;

export const ImgWrap4 = styled.div`
    max-width: 555px;
    height: 100%;
    padding-top: 10px;
    padding-left: 70px;

    @media screen and (max-width: 768px) {
        padding: 0;
    }
`;

export const ImgMicro = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
`;

export const ImgPalantir = styled.img`
    width: 80%;
    margin: 0 0 10px 0;
    padding-bottom: 30px;
`;

export const ImgEpam = styled.img`
    width: 88%;
    margin: 0px 0 10px 0;
`;

export const ImgChoco = styled.img`
    width: 70%;
    margin: 0px 0 10px 0;
`;

export const ImgBird = styled.img`
    width: 40%;
    padding-bottom: 30px;
    margin-left: -220px;
    margin-top: -20px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;