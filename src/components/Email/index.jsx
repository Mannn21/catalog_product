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
	Title,
	SectionRight,
	Button
} from "./styled.js";
import { AiOutlineDown, AiOutlineUp, AiOutlineSend } from "react-icons/ai";

const Email = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [data, setData] = useState("");

	const handleDropdownItemClick = item => {
		setData(item);
		setIsOpen(false);
	};

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
							<Title>Nama :</Title>
							<Input type="text" name="from_name" autoComplete="off" placeholder="Masukkan Nama Anda..."/>
						</InputBox>
						<InputBox>
							<Title>Email :</Title>
							<Input type="email" name="from_email" autoComplete="off" placeholder="Masukkan Email Anda..." />
						</InputBox>
						<DropdownBox>
							<DropdownHeader>Perihal : </DropdownHeader>
							<DropdownContainer
								onClick={() => setIsOpen(!isOpen)}
								$isOpen={isOpen}>
								<DropdownValueBox>
									<DropdownValue
										type="text"
										name="subject"
										value={data}
										readOnly
										placeholder="Pilih Opsi Perihal Anda...."
									/>
									{isOpen === false ? <AiOutlineDown /> : <AiOutlineUp />}
								</DropdownValueBox>
								<Dropdown>
									<DropdownItem
										onClick={() => handleDropdownItemClick("Pertanyaan")}>
										<Radio
											type="radio"
											value="Pertanyaan"
											id="Pertanyaan"
											name="subject"
											onClick={e => setData(e.target.value)}
										/>
										<label htmlFor="Pertanyaan">Pertanyaan</label>
									</DropdownItem>
									<DropdownItem
										onClick={() => handleDropdownItemClick("Permintaan")}>
										<Radio
											type="radio"
											value="Permintaan"
											id="Permintaan"
											name="subject"
											onClick={e => setData(e.target.value)}
										/>
										<label htmlFor="Permintaan">Permintaan</label>
									</DropdownItem>
									<DropdownItem
										onClick={() => handleDropdownItemClick("Kritik dan Saran")}>
										<Radio
											type="radio"
											value="Kritik dan Saran"
											id="Kritik dan Saran"
											name="subject"
											onClick={e => setData(e.target.value)}
										/>
										<label htmlFor="Kritik dan Saran">Kritik dan Saran</label>
									</DropdownItem>
								</Dropdown>
							</DropdownContainer>
						</DropdownBox>
					</Detail>
					<SectionRight>
						<MessageBox>
							<HeaderMessage>
								<Title>Message</Title>
							</HeaderMessage>
							<TextArea name="message" placeholder="Masukkan Pesan Anda..." />
						</MessageBox>
						<ButtonWrapper>
							<Button type="submit" >
								Kirim
								<AiOutlineSend />
							</Button>
						</ButtonWrapper>
					</SectionRight>
				</FormBox>
			</Form>
		</Container>
	);
};

export default Email;
