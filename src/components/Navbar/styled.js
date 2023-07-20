import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderWrapper = styled.header`
	position: sticky;
	top: 0;
	background: rgba(255, 255, 255, 0.45);
	box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
	backdrop-filter: blur(4.7px);
	-webkit-backdrop-filter: blur(4.7px);
	width: 100%;
	white-space: nowrap;
	height: 70px;
	transition: 0.2s;
	z-index: 999;

	@media (max-width: 992px) {
		height: ${props => (props?.height === "true" ? "60px" : "220px")};
	}
`;

export const Container = styled.div`
	box-sizing: border-box;
	position: relative;
	width: 100%;
	height: 100%;
	padding: 0 60px;
	margin-left: auto;
	margin-right: auto;

	@media (max-width: 992px) {
		max-width: 800px;
		padding: 0 50px;
	}

	@media (max-width: 768px) {
		max-width: 800px;
	}
`;

export const Wrapper = styled.div`
	display: flex;
	align-items: center;
	height: 100%;
	position: relative;
	justify-content: space-between;

	@media (max-width: 992px) {
		align-items: start;
		flex-direction: column;
		overflow: hidden;
	}
`;

export const Logo = styled(Link)`
	display: block;
	width: 100px;
	font-family: "Acme", sans-serif;
	color: #3636B2;
	letter-spacing: 4px;
	font-size: 2em;
	font-weight: 800;
	cursor: pointer;
	text-decoration: none;

	@media (max-width: 992px) {
		margin-top: 12px;
	}
`;

export const Menu = styled.div`
	display: flex;
	gap: 80px;
	margin-top: 5px;
	width: calc(100% - 350px);
	justify-content: center;
	align-items: center;

	@media (max-width: 992px) {
		gap: 0;
		width: 100%;
		margin: auto;
		text-align: center;
		flex-direction: column;
		margin-top: -28px;
		padding-bottom: 20px;
	}
`;

export const Nav = styled(Link)`
	list-style: none;
	cursor: pointer;
	transition: 0.2s;
	font-weight: 600;
	color: #000;
	text-decoration: none;
	font-size: 20px;

	&:hover {
		color: #566ffe;
	}

	@media (max-width: 992px) {
		margin-top: 20px;
		font-weight: 600;
	}
`;

export const SearchBox = styled.div`
	display: flex;
	flex-direction: row;
	gap: 5px;
	padding: 5px;
	width: 250px;
	background: none;
	background-color: #dbdbdb;
	border-radius: 16px;
	margin-left: auto;
	color: #000;

	@media (max-width: 992px) {
		margin: auto;
		width: 96%;
	}
`;

export const IconWrapper = styled.div`
	width: 40px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Search = styled.input`
	outline: none;
	border: none;
	font-family: "Nunito", sans-serif;
	letter-spacing: 1.1px;
	font-size: 14px;
	width: calc(100% - 40px);
	background-color: transparent !important;
	color: #000;
`;

export const BurgerWrapper = styled.div`
	display: none;

	@media screen and (max-width: 992px) {
		display: block;
		position: absolute;
		right: 0;
		top: 1.6em;
		cursor: pointer;
	}
`;
