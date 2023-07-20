import {
	Container,
	Wrapper,
	ContentWrapper,
	ImageWrapper,
	Image,
	Header,
	Text,
	Button,
} from "./styled.js";

const Banner = () => {
	return (
		<Container>
			<Wrapper>
				<ContentWrapper $text={true}>
					<Header>Miliki berbagai kebutuhan anda dalam satu platform</Header>
					<Text>
						Menyediakan berbagai produk, mulai dari fashion hingga alat
						elektronik dari berbagai merk terkenal dengan harga yang terjangkau
					</Text>
					<Button to="/product">Lihat Produk</Button>
				</ContentWrapper>
				<ContentWrapper>
					<ImageWrapper>
						<Image src="/banner.webp" alt="" />
					</ImageWrapper>
				</ContentWrapper>
			</Wrapper>
		</Container>
	);
};

export default Banner;
