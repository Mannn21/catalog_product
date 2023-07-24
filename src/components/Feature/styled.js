import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	height: 120px;
	box-sizing: border-box;
	padding: 5px 100px;
    margin-top: 20px;

	@media (max-width: 992px) {
		padding: 5px 60px;
	}

	@media (max-width: 765px) {
		padding: 5px 10px;
	}
`;

export const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	background-color: #3636B2;
    display: flex;
    flex-direction: row;
    border-radius: 20px;
    padding: 5px 0;
`;

export const Card = styled.div`
	width: calc(100% / 4);
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 6px;
    color: white;
`;

export const CardText = styled.span`
    font-family: "Nunito", sans-serif;
    font-size: 18px;
    text-align: center;

	@media (max-width: 765px) {
		font-size: 14px;
	}
`
