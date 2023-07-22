import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	height: auto;
	box-sizing: border-box;
	padding: 20px 100px;
`;

export const Wrapper = styled.div`
	width: 100%;
	height: 550px;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	box-shadow: 1px 1px 5px 6px rgba(184, 184, 184, 0.75);
	-webkit-box-shadow: 1px 1px 5px 6px rgba(184, 184, 184, 0.75);
	-moz-box-shadow: 1px 1px 5px 6px rgba(184, 184, 184, 0.75);
`;

export const HeaderWrapper = styled.div`
	width: 100%;
	height: 140px;
	display: flex;
	flex-direction: column;
	gap: 6px;
	justify-content: center;
	align-items: center;
`;

export const Span = styled.span`
	font-size: 25px;
	font-weight: 600;
	font-family: "Raleway", sans-serif;
	letter-spacing: 1.1px;
	display: block;
`;

export const EmailWrapper = styled.div`
	width: 100%;
	height: calc(100% - 140px);
`;
