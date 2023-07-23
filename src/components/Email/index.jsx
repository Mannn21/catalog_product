import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
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
	Button,
} from "./styled.js";
import { AiOutlineDown, AiOutlineUp, AiOutlineSend } from "react-icons/ai";

const Email = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [data, setData] = useState("");
	const [message, setMessage] = useState("");
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");

	console.log({name, email, data, message})

	const handleDropdownItemClick = item => {
		setData(item);
		setIsOpen(false);
	};

	const form = useRef();
	const MySwal = withReactContent(Swal);

	const sendEmail = async e => {
		e.preventDefault();
		try {
			MySwal.fire({
				title: <p>Sedang Mengirim Pesan</p>,
				allowEscapeKey: false,
				allowOutsideClick: false,
				didOpen: () => {
					MySwal.showLoading();
				},
			});
			const result = await emailjs.sendForm(
				`${import.meta.env.VITE_APP_EMAIL_SERVICE_ID}`,
				`${import.meta.env.VITE_APP_EMAIL_TEMPLATE_ID}`,
				form.current,
				`${import.meta.env.VITE_APP_EMAIL_API_KEY}`
			);
			MySwal.close();
			if (result && result.text === "OK") {
				await MySwal.fire({
					title: "Pesan Berhasil Terkirim",
					icon: "success",
					timer: 2000,
					showConfirmButton: false,
				});
			} else {
				await MySwal.fire({
					title: "Pesan Gagal Terkirim, Mohon Lengkapi Pesan",
					icon: "error",
					timer: 2000,
					showConfirmButton: false,
				});
			}
		} catch (error) {
			await MySwal.fire({
				title: "Kesalahan Server, Pesan Gagal Terkirim",
				icon: "error",
				timer: 2000,
				showConfirmButton: false,
			});
		}
	};

	return (
		<Container>
			<Form ref={form} onSubmit={sendEmail}>
				<FormBox>
					<Detail>
						<InputBox>
							<Title>Nama :</Title>
							<Input
								type="text"
								name="from_name"
								autoComplete="off"
								placeholder="Masukkan Nama Anda..."
								onChange={e => setName(e.target.value)}
							/>
						</InputBox>
						<InputBox>
							<Title>Email :</Title>
							<Input
								type="email"
								name="from_email"
								autoComplete="off"
								placeholder="Masukkan Email Anda..."
								onChange={e => setEmail(e.target.value)}
							/>
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
							<TextArea
								name="message"
								placeholder="Masukkan Pesan Anda..."
								onChange={e => setMessage(e.target.value)}
							/>
						</MessageBox>
						<ButtonWrapper>
							{message === "" || message.length <= 3 || name === "" || data === "" || email === "" ? null : (
								<Button type="submit">
									Kirim
									<AiOutlineSend />
								</Button>
							)}
						</ButtonWrapper>
					</SectionRight>
				</FormBox>
			</Form>
		</Container>
	);
};

export default Email;
