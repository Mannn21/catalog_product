import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderWrapper = styled.header`
	position: fixed;
	top: 0;
	background: transparent !important;
	width: 100%;
	white-space: nowrap;
	height: 70px;
	transition: 0.2s;
	z-index: 999;

	@media (max-width: 992px) {
		height: ${props => (props?.height === "true" ? "60px" : "195px")};
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
	padding: 5px;
	border-bottom: 1px solid black;

	@media (max-width: 992px) {
		align-items: start;
		flex-direction: column;
		overflow: hidden;
	}
`;

export const Logo = styled.h2`
	display: block;
	width: 100px;
	font-family: "Acme", sans-serif;
	color: #2c365a;
	letter-spacing: 4px;
	font-size: 2em;
	font-weight: 800;
	cursor: pointer;

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
	border: 1px solid #91a0a4;
	border-radius: 16px;
	margin-left: auto;

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
`

export const Search = styled.input`
	outline: none;
	border: none;
	font-family: "Nunito", sans-serif;
	letter-spacing: 1.1px;
	font-size: 14px;
	width: calc(100% - 40px);
	background-color: transparent !important;
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
