import Email from "../../components/Email";
import {
	Container,
	HeaderWrapper,
	EmailWrapper,
	Wrapper,
	Span,
} from "./styled.js";

const Contact = () => {
	
	return (
		<Container>
			<Wrapper>
				<HeaderWrapper>
					<Span>Hubungi Kami Kapanpun,</Span>
					<Span>Kami selalu senang mendengarnya!</Span>
				</HeaderWrapper>
				<EmailWrapper>
					<Email />
				</EmailWrapper>
			</Wrapper>
		</Container>
	);
};

export default Contact;
