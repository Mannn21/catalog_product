import React, { useState, useEffect, Suspense, useRef } from "react";
import { getData } from "../../utils/getDatas.js";
import {
	ContentContainer,
	ContentWrapper,
	Content,
	CardWrapper,
} from "./styled.js";
import Skeleton from "../Skeleton";
import PropTypes from "prop-types";

const Card = React.lazy(() => import("../Card"));

const CardList = ({ query }) => {
	const [products, setProducts] = useState([]);
	const prevProductsRef = useRef([]);

	useEffect(() => {
		const fetchApi = async () => {
			const response = await getData();
			setProducts(response.data);
			prevProductsRef.current = response.data;
		};

		fetchApi();
	}, []);

	useEffect(() => {
		const fetchData = () => {
			const search = prevProductsRef.current.filter(item =>
				item.title.toLowerCase().includes(query.toLowerCase())
			);
			setProducts(search);
		};

		if (query.length > 2) {
			fetchData();
		} else if (query.length === 0) {
			setProducts(prevProductsRef.current);
		}
	}, [query]);

	return (
		<ContentContainer>
			{products.length === 0 ? (
				<>
					<h1>No Data Result...</h1>
				</>
			) : (
				<ContentWrapper>
					<Content style={{ display: "flex", gap: "50px", flexWrap: "wrap" }}>
						{products?.map((product, index) => {
							return (
								<CardWrapper key={index}>
									<Suspense fallback={<Skeleton />}>
										<Card data={product} />
									</Suspense>
								</CardWrapper>
							);
						})}
					</Content>
				</ContentWrapper>
			)}
		</ContentContainer>
	);
};

CardList.propTypes = {
	query: PropTypes.string.isRequired,
};

export default CardList;
