import {
	BottomFooter,
	Container,
	Copyright,
	FooterDetails,
	FooterHeader,
	Medsos,
	MedsosList,
	MedsosWrapper,
	TopFooter,
	Wrapper,
} from "./styled.js";
import { FiFacebook, FiInstagram } from "react-icons/fi";

const Footer = () => {
	return (
		<Container>
			<Wrapper>
				<TopFooter>
					<FooterHeader>Storey Apps</FooterHeader>
					<FooterDetails>
						Storey Apps menyediakan berbagai kebutuhan anda, mulai dari
						elektronik hingga fashion. Jika anda menyukai kami, ikuti media
						sosial kami di bawah ini.
					</FooterDetails>
					<MedsosWrapper>
						<MedsosList>
							<Medsos to={`https://facebook.com/${import.meta.env.VITE_APP_FACEBOOK}`} target="_blank">
								<FiFacebook size={24}/>
							</Medsos>
						</MedsosList>
						<MedsosList>
							<Medsos to={`https://instagram.com/${import.meta.env.VITE_APP_INSTAGRAM}`} target="_blank">
								<FiInstagram size={24}/>
							</Medsos>
						</MedsosList>
					</MedsosWrapper>
				</TopFooter>
				<BottomFooter>
					<Copyright>Copyright 2023 StoreyApps</Copyright>
				</BottomFooter>
			</Wrapper>
		</Container>
	);
};

export default Footer;
