import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
	width: 100%;
	height: 180px;
	box-sizing: border-box;
	margin-top: 100px;
`;

export const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
`;

export const TopFooter = styled.div`
	width: 100%;
	height: calc(100% - 20px);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 20px 100px;
	background-color: #111;
	color: #fff;
	box-sizing: border-box;
    gap: 15px;
`;

export const BottomFooter = styled.div`
	width: 100%;
	height: 20px;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #000;
	color: #fff;
`;

export const FooterHeader = styled.span`
	font-size: 18px;
	font-weight: 600;
	font-family: "Nunito", sans-serif;
	letter-spacing: 1.1px;
`;

export const FooterDetails = styled.span`
	font-size: 14px;
	font-weight: 500;
	font-family: "Nunito", sans-serif;
	letter-spacing: 1.1px;
	display: block;
	padding: 0 100px;
	width: 60%;
	text-align: center;
`;

export const MedsosWrapper = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	width: 100px;
`;

export const MedsosList = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Medsos = styled(Link)`
	color: #fff;
	text-decoration: none;
`;

export const Copyright = styled.span`
	font-size: 12px;
	font-weight: 500;
	font-family: "Nunito", sans-serif;
	letter-spacing: 1.1px;
`;
