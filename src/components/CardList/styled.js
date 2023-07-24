import styled from "styled-components";

export const ContentContainer = styled.div`
    width: 100%;
    height: auto;
    padding: 20px 30px;
    box-sizing: border-box;

    @media (max-width: 985px) {
        padding: 20px 20px;
    }
`

export const ContentWrapper = styled.div`
    margin-top: 20px;
    padding: 0 50px;

    @media (max-width: 985px) {
        padding: 10px 20px;
    }

    @media only screen and (max-width: 480px) {
        padding: 10px 5px;
    
    }
    @media only screen and (min-width: 481px) and (max-width: 768px){
        padding: 30px 5px;
    }
`

export const Content = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 50px;
    justify-content: center;
    align-items: center;

    @media (max-width: 985px) {
        gap: 20px;
        border: 1px solid red;
    }
`

export const CardWrapper = styled.div`
    width: 240px;
	height: 300px;

    /* @media (max-width: 585px) {
        width: 100%;
    } */
`