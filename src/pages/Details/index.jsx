import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import {
	Container,
	Navigation,
	NavigationWrapper,
	Wrapper,
	ContentWrapper,
	Section,
} from "./styled";

const Details = () => {
	return (
		<Container>
			<Wrapper>
				<NavigationWrapper>
					<Navigation>
						<AiOutlineArrowLeft />
					</Navigation>
					<Navigation>
						<AiOutlineArrowRight />
					</Navigation>
				</NavigationWrapper>
				<ContentWrapper>
					<Section>Detail Page</Section>
					<Section></Section>
					<Section></Section>
				</ContentWrapper>
			</Wrapper>
		</Container>
	);
};

export default Details;
