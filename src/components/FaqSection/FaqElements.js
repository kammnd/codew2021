import styled from 'styled-components';

export const InfoContainer = styled.div`
    color: #ffffff;
    background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#010606')};

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
    @media screen and (max-width: 540px) {
        padding-bottom: 200px;
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
    //grid-auto-columns: minmax(auto, 1rf);
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
    padding: 0 15px 0 25px;
    grid-area: col1;
    padding-top: 50px;

    @media screen and (max-width: 768px) {
        margin-bottom: 0px;
    }
`;

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0px 25px 0;
    grid-area: col2;
    padding-top: 80px;
    

    @media screen and (max-width: 768px) {
       margin-top: 0;
       padding: 0 15px 0 25px;
    }
`;

export const TextWrapper1 = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 70px;
    @media screen and (max-width: 768px) {
        padding-bottom: 0;
    }
`;

export const TextWrapper2 = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 0;
    @media screen and (max-width: 768px) {
        padding-bottom: 10px;
        padding-top: 0;
    }
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
    font-size: 22px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({ lightText }) => ( lightText ? '#f7f8f8' : '#010606')};
    font-family: 'Raleway', sans-serif;

    @media screen and (max-width: 768px) {
        font-size: 15px;
    }

    @media screen and (max-width: 500px) {
        font-size: 12px;
    }

`;

export const Subtitle = styled.p`
    max-width: 440px;
    margin-top: 25px;
    margin-bottom: 35px;
    font-size: 16px;
    line-height: 24px;
    color: ${({darkText}) => (darkText ?  '#010606' : '#f9f9f9')};
    opacity: 90%;
    text-align: justify;
    text-justify: inter-word;

    @media screen and (max-width: 960px) {
        font-size: 13px;
        margin-top: 8px;
        margin-bottom: 12px;
    }

    @media screen and (max-width: 500px) {
        font-size: 10px;
        margin-top: 5px;
        margin-bottom: 8px;
    }
`;