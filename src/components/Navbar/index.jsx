import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
import {
	HeaderWrapper,
	Container,
	Wrapper,
	IconWrapper,
	BurgerWrapper,
	Logo,
	Menu,
	SearchBox,
	Search,
	Nav,
} from "./styled.js";
import PropTypes from "prop-types"

const Navbar = ({setQuery}) => {
	const [isShrinkHeader, setIsShrinkHeader] = useState(true);
	

	const toggleShrinkHeader = () => {
		setIsShrinkHeader(state => !state);
	};

	

	return (
		<HeaderWrapper height={`${isShrinkHeader}`}>
			<Container>
				<Wrapper>
					<Logo to="/">Storey</Logo>
					<Menu>
						<Nav to="/product">Product</Nav>
						<Nav to="/contact">Hubungi Kami</Nav>
					</Menu>
					<SearchBox>
						<IconWrapper>
							<AiOutlineSearch size={23}/>
						</IconWrapper>
						<Search type="text" placeholder="Search..." onChange={e => setQuery(e.target.value)}/>
					</SearchBox>
					<BurgerWrapper>
						{isShrinkHeader ? (
							<AiOutlineMenu size={25} onClick={() => toggleShrinkHeader()} />
						) : (
							<AiOutlineClose size={25} onClick={() => toggleShrinkHeader()} />
						)}
					</BurgerWrapper>
				</Wrapper>
			</Container>
		</HeaderWrapper>
	);
};

Navbar.propTypes ={
	setQuery: PropTypes.func.isRequired
}

export default Navbar;
