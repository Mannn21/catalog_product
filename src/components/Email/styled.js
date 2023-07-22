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
	height: calc(100% - 50px);
	padding: 10px 40px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

export const Detail = styled.div`
	width: 50%;
	height: 100%;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	gap: 20px;
	padding: 20px;
`;

export const InputBox = styled.div`
	width: 100%;
	height: 50px;
	display: flex;
	flex-direction: column;
	gap: 5px;
`;

export const Input = styled.input`
	width: 80%;
	height: 30px;
	border: 1px solid #777;
	outline: none;
`;

export const DropdownBox = styled.div`
	display: flex;
	flex-direction: row;
    width: 80%;
    box-sizing: border-box;
`;

export const DropdownHeader = styled.span`
    display: block;
    width: 60px;
    height: auto;
`

export const DropdownContainer = styled.div`
    width: calc(100% - 60px);
    height: ${props => (props.$isOpen === true ? "135px" : "32px")};
    border: 1px solid black;
    box-sizing: border-box;
    overflow: hidden;
`;

export const DropdownValueBox = styled.div`
	display: block;
	width: 100%;
	height: 30px;
	border: 1px solid black;
    display: flex;
    align-items: center;
    &:hover {
        cursor: pointer;
    }
`;

export const DropdownValue = styled.div`
    width: 90%;
    height: 80%;
    caret-color: transparent;
    border: none;
    outline: none;
`

export const Dropdown = styled.div`
	display: flex;
	flex-direction: column;
    padding-top: 5px;
    box-sizing: border-box;
    height: calc(100% - 30px);
`;

export const DropdownItem = styled.div`
    width: 100%;
    height: calc( (100% - 5px) / 3);
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    &:hover {
        cursor: pointer;
        background: #999;
    }
`

export const Radio = styled.input`
    appearance: none;
`

export const MessageBox = styled.div`
	width: 50%;
	height: 100%;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
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
	width: 80%;
	height: calc(100% - 50px);
	resize: none;
`;

export const ButtonWrapper = styled.div`
	width: 100%;
	height: 50px;
`;
