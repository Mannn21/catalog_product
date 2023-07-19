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

const Navbar = () => {
	const [isShrinkHeader, setIsShrinkHeader] = useState(true);

	const toggleShrinkHeader = () => {
		setIsShrinkHeader(state => !state);
	};

	return (
		<HeaderWrapper height={`${isShrinkHeader}`}>
			<Container>
				<Wrapper>
					<Logo>Storey</Logo>
					<Menu>
						<Nav>Product</Nav>
						<Nav>Hubungi Kami</Nav>
					</Menu>
					<SearchBox>
						<IconWrapper>
							<AiOutlineSearch size={23}/>
						</IconWrapper>
						<Search type="text" placeholder="Search..." />
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

export default Navbar;
