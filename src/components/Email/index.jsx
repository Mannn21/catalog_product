import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
	Container,
	FormBox,
	Form,
	ButtonWrapper,
	Detail,
	InputBox,
	Input,
	MessageBox,
	TextArea,
	HeaderMessage,
    DropdownHeader,
	DropdownBox,
	DropdownContainer,
	DropdownValueBox,
	DropdownValue,
	Dropdown,
	DropdownItem,
	Radio,
} from "./styled.js";

const Email = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [data, setData] = useState("");

	const form = useRef();

	const sendEmail = e => {
		e.preventDefault();
		emailjs
			.sendForm(
				`${import.meta.env.VITE_APP_EMAIL_SERVICE_ID}`,
				`${import.meta.env.VITE_APP_EMAIL_TEMPLATE_ID}`,
				form.current,
				import.meta.env.VITE_APP_EMAIL_API_KEY
			)
			.then(
				result => {
					console.log(result.text);
				},
				error => {
					console.log(error.text);
				}
			);
	};

	return (
		<Container>
			<Form ref={form} onSubmit={sendEmail}>
				<FormBox>
					<Detail>
						<InputBox>
							<label>Nama</label>
							<Input type="text" name="from_name" />
						</InputBox>
						<InputBox>
							<label>Email Anda</label>
							<Input type="email" name="from_email" />
						</InputBox>
						<DropdownBox>
							<DropdownHeader>Perihal : </DropdownHeader>
							<DropdownContainer onClick={() => setIsOpen(!isOpen)} $isOpen={isOpen}>
								<DropdownValueBox>
									{/* <DropdownValue type="text" name="subject" value={data}/> */}
                                    <DropdownValue>{data}</DropdownValue>
								</DropdownValueBox>
								<Dropdown>
									<DropdownItem>
										<Radio
											type="radio"
											value="Question"
                                            id="Question"
											onClick={e => setData(e.target.value)}
										/>
										<label htmlFor="Question">Pertanyaan</label>
									</DropdownItem>
									<DropdownItem>
										<Radio
											type="radio"
											value="Request"
                                            id="Request"
											onClick={e => setData(e.target.value)}
										/>
										<label htmlFor="Request">Permintaan</label>
									</DropdownItem>
									<DropdownItem>
										<Radio
											type="radio"
											value="Suggestion"
                                            id="Suggestion"
											onClick={e => setData(e.target.value)}
										/>
										<label htmlFor="Suggestion">Kritik dan Saran</label>
									</DropdownItem>
								</Dropdown>
							</DropdownContainer>
						</DropdownBox>
					</Detail>
					<MessageBox>
						<HeaderMessage>
							<label>Message</label>
						</HeaderMessage>
						<TextArea name="message" />
					</MessageBox>
				</FormBox>
				<ButtonWrapper>
					<input type="submit" value="Send" />
				</ButtonWrapper>
			</Form>
		</Container>
	);
};

export default Email;
