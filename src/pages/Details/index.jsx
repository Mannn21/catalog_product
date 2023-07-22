import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import {
	Container,
	Navigation,
	NavigationWrapper,
	Wrapper,
	ContentWrapper,
	Section,
	Title,
	Image,
	Price,
	Description,
	Category,
	Rating,
} from "./styled";
import { getProduct } from "../../utils/getDatas.js";
import Star from "../../components/Star";

const Details = () => {
	const { id } = useParams();
	const [idProduct, setIdProduct] = useState(parseInt(id));
	const [product, setProduct] = useState({});
	const navigate = useNavigate();

	useEffect(() => {
		navigate(`/product/${idProduct}`);
	}, [idProduct, navigate]);

	useEffect(() => {
		const fetchApi = async () => {
			const response = await getProduct(id);
			setProduct(response.data);
		};

		fetchApi();
	}, [id]);

	const handleNavigation = increment => {
		const newProduct = idProduct + increment;
		setIdProduct(newProduct);
	};

	return (
		<Container>
			{Object.keys(product).length === 0 ? (
				<></>
			) : (
				<Wrapper>
					<NavigationWrapper>
						{idProduct === 1 ? (
							<div style={{width: "45px", height: "45px"}}></div>
						) : (
							<Navigation
								to={`/product/${idProduct}`}
								onClick={() => handleNavigation(-1)}>
								{idProduct === 1 ? <></> : <AiOutlineArrowLeft size={25} />}
							</Navigation>
						)}
						{idProduct === 20 ? (
							<div style={{width: "45px", height: "45px"}}></div>
						) : (
							<Navigation
								to={`/product/${idProduct}`}
								onClick={() => handleNavigation(1)}>
								<AiOutlineArrowRight size={25} />
							</Navigation>
						)}
					</NavigationWrapper>
					<ContentWrapper>
						<Section>
							<Title>{product.title}</Title>
							<Category>{product.category}</Category>
							<Rating>
								<span>Rating : </span>
								<Star stars={product.rating.rate} />
							</Rating>
							<Rating>Jumlah Rating: {product.rating.count}</Rating>
						</Section>
						<Section>
							<Image src={product.image} alt="" />
						</Section>
						<Section>
							<Price>$ {product.price}</Price>
							<Description>{product.description.slice(0, 519)}</Description>
						</Section>
					</ContentWrapper>
				</Wrapper>
			)}
		</Container>
	);
};

export default Details;
