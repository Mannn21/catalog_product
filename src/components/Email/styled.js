import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	height: 400px;
	box-sizing: border-box;
	padding: 20px 100px;
`;

export const Form = styled.form`
	width: 100%;
	height: 100%;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
`;

export const FormBox = styled.div`
	box-sizing: border-box;
	width: 100%;
	height: 100%;
	padding: 10px 40px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	/* border: 1px solid blue; */
`;

export const Detail = styled.div`
	width: 50%;
	height: 100%;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	margin-top: 100px;
	justify-content: flex-start;
	align-items: flex-start;
	gap: 15px;
	padding: 5px 20px;
`;

export const InputBox = styled.div`
	width: 100%;
	height: 55px;
	display: flex;
	flex-direction: column;
	gap: 5px;
`;

export const Title = styled.span`
	font-size: 16px;
	font-weight: 600;
	font-family: "Nunito", sans-serif;
	letter-spacing: 1.1px;
`;

export const Input = styled.input`
	width: 80%;
	height: 30px;
	border: 1px solid #777;
	outline: none;
	padding: 4px;
	box-sizing: border-box;
	font-size: 16px;
	font-weight: 500;
	font-family: "Nunito", sans-serif;
	letter-spacing: 1.1px;
`;

export const DropdownBox = styled.div`
	display: flex;
	flex-direction: row;
	width: 80%;
	box-sizing: border-box;
	margin-top: 10px;
`;

export const DropdownHeader = styled.span`
	display: block;
	width: 80px;
	height: 30px;
	display: flex;
	align-items: center;
	font-size: 16px;
	font-weight: 600;
	font-family: "Nunito", sans-serif;
	letter-spacing: 1.1px;
`;

export const DropdownContainer = styled.div`
	width: calc(100% - 80px);
	height: ${props => (props.$isOpen === true ? "135px" : "35px")};
	border: 1px solid black;
	box-sizing: border-box;
	overflow: hidden;
`;

export const DropdownValueBox = styled.div`
	display: block;
	width: 100%;
	height: 35px;
	border-bottom: 1px solid black;
	display: flex;
	align-items: center;
	box-sizing: border-box;

	&:hover {
		cursor: pointer;
	}
`;

export const DropdownValue = styled.input`
	width: 90%;
	height: 100%;
	caret-color: transparent;
	border: none;
	outline: none;
	font-size: 16px;
	font-weight: 500;
	font-family: "Nunito", sans-serif;
	letter-spacing: 1.1px;
	box-sizing: border-box;
	padding: 4px;

	&:hover {
		cursor: pointer;
	}
`;

export const Dropdown = styled.div`
	display: flex;
	flex-direction: column;
	padding-top: 5px;
	box-sizing: border-box;
	height: calc(100% - 30px);
`;

export const DropdownItem = styled.div`
	width: 100%;
	height: calc((100% - 5px) / 3);
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	font-size: 16px;
	font-weight: 500;
	font-family: "Nunito", sans-serif;
	letter-spacing: 1.1px;

	&:hover {
		cursor: pointer;
		background: #999;
	}
`;

export const Radio = styled.input`
	appearance: none;
`;

export const SectionRight = styled.div`
	width: 50%;
	height: 100%;
	box-sizing: border-box;
	padding: 10px 20px;
`;

export const MessageBox = styled.div`
	width: 100%;
	height: calc(100% - 50px);
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 10px;
`;

export const HeaderMessage = styled.div`
	width: 100%;
	height: 50px;
	box-sizing: border-box;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const TextArea = styled.textarea`
	width: 90%;
	height: calc(100% - 50px);
	resize: none;
	box-sizing: border-box;
	padding: 5px;
	font-size: 16px;
	font-weight: 500;
	font-family: "Nunito", sans-serif;
	letter-spacing: 1.1px;
`;

export const ButtonWrapper = styled.div`
	width: 100%;
	height: 50px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Button = styled.button`
	width: 120px;
	height: 30px;
	padding: 5px 10px;
	display: flex;
	align-items: center;
	justify-content: center;
	box-sizing: border-box;
	color: #fff;
	font-family: "Nunito", sans-serif;
	font-size: 16px;
	font-weight: 600;
	background-color: #222;
	letter-spacing: 1.1px;
	border: none;
	outline: none;
	display: flex;
	gap: 10px;

	&:hover {
		cursor: pointer;
	}
`;
