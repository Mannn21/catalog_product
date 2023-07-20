// import { useState, useEffect } from "react";
// import { getData } from "../../utils/getDatas.js";
import {
	Container,
	Wrapper,
	HeaderWrapper,
	ImageWrapper,
	Image,
	FooterWrapper,
    Title,
    Category
} from "./styled.js";
import PropTypes from "prop-types";

const Card = ({data}) => {


	return (
		<Container>
			<Wrapper>
				<HeaderWrapper>
					<Title>{data.title.slice(0, 9)}</Title>
					<Category>{data.category}</Category>
				</HeaderWrapper>
				<ImageWrapper>
					<Image src={data.image} alt="" />
				</ImageWrapper>
				<FooterWrapper>
					<h3>$ {data.price}</h3>
					<span>{data.rating.rate}</span>
				</FooterWrapper>
			</Wrapper>
		</Container>
	);
};

Card.propTypes = {
	data: PropTypes.shape({
		title: PropTypes.string.isRequired,
		category: PropTypes.string.isRequired,
		image: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired,
		rating: PropTypes.shape({
            rate: PropTypes.number.isRequired,
            count: PropTypes.number.isRequired,
        }).isRequired
	}).isRequired,
};


export default Card;
