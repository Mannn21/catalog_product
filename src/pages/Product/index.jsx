import CardList from "../../components/CardList";
import PropTypes from "prop-types";

const Product = ({ query }) => {

	return (
		<div>
			<CardList query={query}/>
		</div>
	);
};

Product.propTypes = {
	query: PropTypes.string.isRequired,
};

export default Product;
