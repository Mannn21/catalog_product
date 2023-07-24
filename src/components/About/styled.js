import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	height: auto;
	box-sizing: border-box;
	padding: 20px 80px;
    margin-top: 30px;

	@media (max-width: 992px) {
		padding: 10px 30px;
    }
	
    @media (max-width: 395px) {
		padding: 10px 10px;
        height: 800px;
    }
`;

export const Wrapper = styled.div`
	width: 100%;
	height: 400px;
	display: flex;
	flex-direction: row;

	@media (max-width: 992px) {
        flex-direction: column-reverse;
		border: 1px solid red;
		height: 700px;
    }

    @media (max-width: 375px) {
        height: 700px;
    }
`;

export const ContentWrapper = styled.div`
	width: 50%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;

	@media (max-width: 992px) {
		width: 100%;
		height: 50%;
		border: 1px solid green;
    }

    @media (max-width: 375px) {
        height: 800px;
    }
`;

export const AboutWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 20px;
    padding: 40px;

	@media (max-width: 992px) {
		justify-content: center;
		align-items: center;
		padding: 10px;
		gap: 10px;
    }

    @media (max-width: 395px) {
		gap: 5px;
		padding: 5px;
    }
`

export const Header = styled.h2`
    font-family: 'Raleway', sans-serif;
    font-size: 40px;
    font-weight: 700;
    letter-spacing: 1.1px;

	@media (max-width: 992px) {
		font-size: 30px;
    }

    /* @media (max-width: 375px) {
        height: 800px;
    } */
`

export const Text = styled.span`
    font-family: "Nunito", sans-serif;
    font-size: 16px;
    letter-spacing: 1.1px;
    color: #444;
	text-align: justify;

	@media (max-width: 992px) {
		text-align: center;
    }
	
    @media (max-width: 567px) {
		font-size: 14px;
    }
`

export const ImageWrapper = styled.div`
	width: 85%;
	height: 85%;
	/* overflow: hidden; */
	border-radius: 20px;
	box-shadow: 5px 5px 9px 0px rgba(135, 135, 135, 0.75);
	-webkit-box-shadow: 5px 5px 9px 0px rgba(135, 135, 135, 0.75);
	-moz-box-shadow: 5px 5px 9px 0px rgba(135, 135, 135, 0.75);
`;

export const Image = styled.img`
	width: 100%;
	height: 100%;
	border: 1px solid gray;

	@media (max-width: 595px) {
		height: 100%;
	}
`;