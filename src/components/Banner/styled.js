import styled from "styled-components";
import {Link} from "react-router-dom"

export const Container = styled.div`
	width: 100%;
	height: 500px;
	box-sizing: border-box;

    @media (max-width: 992px) {
        height: 700px;
        border: 1px solid red;
    }

    @media (max-width: 375px) {
        height: 800px;
    }
`;

export const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	padding: 10px 80px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	box-sizing: border-box;

    @media (max-width: 992px) {
        flex-direction: column-reverse;
        justify-content: flex-start;
        align-items: center;
        padding: 10px 20px;
    }
`;

export const ContentWrapper = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: ${props => (props.$text === true ? "20px 70px" : 0)};
    gap: 10px;
    box-sizing: border-box;

    @media (max-width: 992px) {
        width: 100%;
        height: 50%;
    }

    @media (max-width: 612px) {
        border: 1px solid blue;
        padding: ${props => (props.$text === true ? "20px 30px" : 0)};
    }

    @media (max-width: 375px) {
        padding: ${props => (props.$text === true ? "10px 20px" : 0)};
    }
`

export const Header = styled.h1`
    font-size: 40px;
    font-family: 'Raleway', sans-serif;
    letter-spacing: 1.1px;

    @media (max-width: 992px) {
        text-align: center;
    }

    @media (max-width: 612px) {
        font-size: 30px;
        text-align: center;
    }

    @media (max-width: 375px) {
        font-size: 28px;
        text-align: center;
    }
`

export const Text = styled.span`
    font-size: 16px;
    letter-spacing: 1.1px;
    font-family: "Nunito", sans-serif;
    color: #555;

    @media (max-width: 992px) {
        text-align: center;
    }

    @media (max-width: 612px) {
        font-size: 14px;
        text-align: center;
    }
`

export const Button = styled(Link)`
    font-size: 18px;
    padding: 4px 18px;
    letter-spacing: 1.1px;
    font-family: "Nunito", sans-serif;
    color: #000;
    text-decoration: none;
    background-color: #9B9BD9;
    border: none;
    outline: none;
    cursor: pointer;
    margin-top: 10px;
    border-radius: 20px;
    box-shadow: 2px 2px 9px 0px rgba(135,135,135,0.75);
	-webkit-box-shadow: 2px 2px 9px 0px rgba(135,135,135,0.75);
	-moz-box-shadow: 2px 2px 9px 0px rgba(135,135,135,0.75);
`

export const ImageWrapper = styled.div`
	width: 270px;
	height: 340px;
	overflow: hidden;
	border-radius: 50% 50% 0 0;
    box-sizing: border-box;
	box-shadow: 5px 5px 9px 4px rgba(207, 198, 198, 0.75);
	-webkit-box-shadow: 5px 5px 9px 4px rgba(207, 198, 198, 0.75);
	-moz-box-shadow: 5px 5px 9px 4px rgba(207, 198, 198, 0.75);

    @media (max-width: 992px) {
        height: 96%;
        width: 280px;
    }
`;

export const Image = styled.img`
	margin-left: -120px;
	height: 100%;

    @media (max-width: 992px) {
        margin-left: -100px;
    }
`;
