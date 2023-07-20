import { useState, useEffect } from "react";
import Card from "../Card";
import { getData } from "../../utils/getDatas.js";
import { ContentContainer, ContentWrapper, Content } from "./styled.js";

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
						return <Card key={index} data={product} />;
					})}
				</Content>
			</ContentWrapper>
		</ContentContainer>
	);
};

export default CardList;
