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
    justify-content: center;
`;

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1rf);
    align-items: center;
    justify-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'` )};

    @media screen and (max-width: 768px) {
        grid-template-areas:  ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    }
`;

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 25px;
    grid-area: col1;
`;

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 180px 15px 0;
    grid-area: col2;
`;

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`;

export const TopLine = styled.p`
    color: #ff5349;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-top: 16px;
`;

export const Heading = styled.h1`
    margin-top: 24px;
    font-size: 30px;
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

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
`;

export const ImgMicro = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
`;

export const ImgPalantir = styled.img`
    width: 90%;
    margin: 50px 0 10px 0;
    padding-right: 0;
`;

export const ImgEpam = styled.img`
    width: 85%;
    margin: 0 0 10px 0;
    padding-right: 0;
`;

export const ImgChoco = styled.img`
    width: 90%;
    margin: 0 0 10px 0;
    padding-right: 0;
`;

export const ImgBirdWrap = styled.div`
    position: absolute;
    margin: 300px 25px 10px 0;
`;

export const ImgBird = styled.img`
    width: 70%;
`;
