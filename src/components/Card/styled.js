import styled from "styled-components";

export const Container = styled.div`
	width: 240px;
	height: 300px;
	box-sizing: border-box;
    cursor: pointer;
`;

export const Wrapper = styled.div`
	border-radius: 10px;
	width: 100%;
	height: 100%;
	padding: 2px;
	display: flex;
	gap: 5px;
	flex-direction: column;
	box-shadow: 3px 3px 6px 0px rgba(128, 128, 128, 0.75);
	-webkit-box-shadow: 3px 3px 6px 0px rgba(128, 128, 128, 0.75);
	-moz-box-shadow: 3px 3px 6px 0px rgba(128, 128, 128, 0.75);
`;

export const HeaderWrapper = styled.div`
	width: 100%;
	height: 40px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	box-sizing: border-box;
	padding: 0 10px;
`;

export const Title = styled.h2`
	font-size: 16px;
`;

export const Category = styled.span`
	font-size: 14px;
`;

export const ImageWrapper = styled.div`
	width: 100%;
	height: calc(100% - 100px);
	box-sizing: border-box;
	overflow: hidden;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Image = styled.img`
	width: 90%;
	height: 100%;
`;

export const FooterWrapper = styled.div`
	box-sizing: border-box;
	width: 100%;
	height: 40px;
	padding: 0 10px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;