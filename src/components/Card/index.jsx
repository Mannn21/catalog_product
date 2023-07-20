import {
	Container,
	Wrapper,
	HeaderWrapper,
	ImageWrapper,
	Image,
	FooterWrapper,
	Title,
	Category,
	Price,
} from "./styled.js";
import PropTypes from "prop-types";
import Star from "../Star"

const Card = ({ data }) => {
	return (
		<Container to={`/product/${data.id}`}>
			<Wrapper>
				<HeaderWrapper>
					<Title>{data.title.slice(0, 9)}</Title>
					<Category>{data.category}</Category>
				</HeaderWrapper>
				<ImageWrapper>
					<Image src={data.image} alt="" />
				</ImageWrapper>
				<FooterWrapper>
					<Price>$ {data.price}</Price>
					<Star stars={data.rating.rate}/>
				</FooterWrapper>
			</Wrapper>
		</Container>
	);
};

Card.propTypes = {
	data: PropTypes.shape({
		id: PropTypes.number.isRequired,
		title: PropTypes.string.isRequired,
		category: PropTypes.string.isRequired,
		image: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired,
		rating: PropTypes.shape({
			rate: PropTypes.number.isRequired,
			count: PropTypes.number.isRequired,
		}).isRequired,
	}).isRequired,
};

export default Card;
