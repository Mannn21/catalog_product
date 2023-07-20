import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: auto;
    box-sizing: border-box;
    padding: 20px 100px;
`

export const Wrapper = styled.div`
    width: 100%;
    height: 600px;
    display: flex;
    flex-direction: row;
`

export const MoreContact = styled.div`
    width: 100%;
    height: 200px;
    border: 1px solid blue;
    display: flex;
    flex-direction: column;
`

export const ContactMe = styled.div`
    width: 100%;
    height: 150px;
    display: flex;
    flex-direction: row;
`

export const EmailContact = styled.div`
    width: 100%;
    height: calc(100% - 200px);
    border: 1px solid red;
`
