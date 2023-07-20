import React, { useState, useEffect, Suspense } from "react";
import { getData } from "../../utils/getDatas.js";
import {
	ContentContainer,
	ContentWrapper,
	Content,
	CardWrapper,
} from "./styled.js";
import Skeleton from "../Skeleton"

const Card = React.lazy(() => import("../Card"));

const CardList = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const fetchApi = async () => {
			const response = await getData();
			setProducts(response.data);
		};

		fetchApi();
	}, []);

	return (
		<ContentContainer>
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
		</ContentContainer>
	);
};

export default CardList;
