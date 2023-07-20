import { BiSolidStar, BiSolidStarHalf, BiStar } from "react-icons/bi";
import PropTypes from "prop-types";
import {Stars} from "./styled.js"

const Star = ({ stars }) => {
	const ratingStar = Array.from({ length: 5 }, (elem, index) => {
		let number = index + 0.5;

		return (
			<span key={index}>
				{stars >= index + 1 ? (
					<BiSolidStar />
				) : stars >= number ? (
					<BiSolidStarHalf />
				) : (
					<BiStar />
				)}
			</span>
		);
	});

	return (
		<div>
			<Stars>{ratingStar}</Stars>
		</div>
	);
};

Star.propTypes = {
	stars: PropTypes.number.isRequired,
};

export default Star;