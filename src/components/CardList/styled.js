import styled from "styled-components";


export const ContentContainer = styled.div`
    width: 100%;
    height: auto;
    padding: 20px 30px;
    box-sizing: border-box;
`

export const ContentWrapper = styled.div`
    margin-top: 20px;
    padding: 0 50px;

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
`