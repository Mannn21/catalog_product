import {
	Container,
	Wrapper,
	ContentWrapper,
    AboutWrapper,
    Header,
    Text,
	ImageWrapper,
	Image,
} from "./styled.js";

const About = () => {
	return (
		<Container>
			<Wrapper>
				<ContentWrapper>
					<AboutWrapper>
						<Header>Tentang Kami</Header>
						<Text>
							Kami adalah platform ecommerce yang menyediakan berbagai produk
							fashion dan elektronik terkini untuk Anda.
						</Text>
						<Text>
							Misi kami adalah memberikan pengalaman belanja online
							yang nyaman, aman, dan memuaskan bagi semua pelanggan
							kami. Temukanlah gaya Anda dengan berbagai koleksi fashion terbaru
							dari merek terkenal di dunia, serta miliki teknologi terbaru
							dengan rangkaian produk elektronik canggih yang kami
							tawarkan. Nikmati pengalaman belanja online yang tak terlupakan
							dengan koleksi lengkap fashion dan elektronik dari Storey.
						</Text>
					</AboutWrapper>
				</ContentWrapper>
				<ContentWrapper>
					<ImageWrapper>
						<Image src="/about.webp" alt="" />
					</ImageWrapper>
				</ContentWrapper>
			</Wrapper>
		</Container>
	);
};

export default About;
