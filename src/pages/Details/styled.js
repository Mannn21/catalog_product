import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
	width: 100%;
	height: auto;
	box-sizing: border-box;
	padding: 20px 100px;
`;

export const Wrapper = styled.div`
	width: 100%;
	height: 95vh;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	gap: 10px;
`;

export const NavigationWrapper = styled.div`
	width: 100%;
	height: 50px;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	gap: 10px;
`;

export const Navigation = styled(Link)`
	width: 45px;
	height: 45px;
	border-radius: 50%;
	color: black;
	display: flex;
	justify-content: center;
	align-items: center;

	&:hover {
		background-color: #181b38;
		color: white;
	}
`;

export const ContentWrapper = styled.div`
	width: 100%;
	height: calc(100% - 155px);
	display: flex;
	flex-direction: row;
	gap: 5px;
`;

export const Section = styled.section`
	width: calc((100% - 10px) / 3);
	height: 100%;
	display: flex;
	overflow: hidden;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	padding: 50px 5px;
	box-sizing: border-box;
	
	&:nth-child(2) {
		padding: 0;
		align-items: center;
		justify-content: center;
	}

	&:nth-child(3) {
		align-items: flex-end;
		justify-content: flex-start;
	}
`;

export const Title = styled.h2`
	font-size: 28px;
	font-weight: 700;
	letter-spacing: 1.1px;
	width: 100%;
	font-family: "Nunito", sans-serif;
`;

export const Price = styled.h2`
	font-size: 28px;
	font-weight: 700;
	letter-spacing: 1.1px;
	font-family: "Nunito", sans-serif;
`;

export const Category = styled.span`
	font-size: 16px;
    margin-bottom: 20px;
	font-weight: 500;
	letter-spacing: 1.1px;
    background-color: blue;
    padding: 5px 8px;
    border-radius: 10px;
    color: white;
	font-family: "Nunito", sans-serif;
`;

export const Rating = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  font-size: 20px;
  justify-content: flex-end;
  margin-bottom: 10px;
  letter-spacing: 1.1px;
  font-family: "Nunito", sans-serif;
`;

export const Description = styled.span`
	font-size: 16px;
	letter-spacing: 1.1px;
	font-family: "Nunito", sans-serif;
`;

export const Image = styled.img`
	width: 90%;
	max-height: 98%;
`;
