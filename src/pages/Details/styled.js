import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: auto;
    box-sizing: border-box;
    padding: 20px 100px;
    border: 1px solid blue;
`

export const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
`

export const NavigationWrapper = styled.div`
    width: 100%;
    height: 35px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border: 1px solid black;
`

export const Navigation= styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    color: black;
    border: 1px solid blue;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ContentWrapper = styled.div`
    width: 100%;
    height: calc(100% - 140px);
    border: 1px solid blue;
    display: flex;
    flex-direction: row;
`

export const Section = styled.section`
    width: calc(100% / 3);
    height: 100%;
    border: 1px solid red;
`