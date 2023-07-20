import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	height: 500px;
	margin-top: 75px;
	box-sizing: border-box;
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
`

export const Header = styled.h1`
    font-size: 40px;
    font-family: 'Raleway', sans-serif;
    letter-spacing: 1.1px;
`

export const Text = styled.span`
    font-size: 16px;
    letter-spacing: 1.1px;
    font-family: "Nunito", sans-serif;
    color: #555;
`

export const Button = styled.button`
    font-size: 18px;
    padding: 4px 18px;
    letter-spacing: 1.1px;
    font-family: "Nunito", sans-serif;
    color: #000;
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
	width: 340px;
	height: 420px;
	overflow: hidden;
	border-radius: 50% 50% 0 0;
	box-shadow: 5px 5px 9px 4px rgba(207, 198, 198, 0.75);
	-webkit-box-shadow: 5px 5px 9px 4px rgba(207, 198, 198, 0.75);
	-moz-box-shadow: 5px 5px 9px 4px rgba(207, 198, 198, 0.75);
`;

export const Image = styled.img`
	margin-left: -120px;
	height: 100%;
`;
