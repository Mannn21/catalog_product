import Card from "../Card"
import { ContentWrapper, ContentHeader } from "./styled.js"

const CardList = () => {
	return (
		<ContentWrapper>
			<ContentHeader>Product</ContentHeader>
			<Card />
		</ContentWrapper>
	);
};

export default CardList;
