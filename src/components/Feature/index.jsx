import { CiDeliveryTruck, CiDiscount1 } from "react-icons/ci";
import { AiOutlineSafety, AiOutlineStar } from "react-icons/ai";
import { Container, Wrapper, Card, CardText } from "./styled.js"

const Feature = () => {
	return (
		<Container>
			<Wrapper>
				<Card>
					<CiDeliveryTruck size={35}/>
                    <CardText>Gratis Pengiriman</CardText>
				</Card>
				<Card>
					<CiDiscount1 size={35}/>
                    <CardText>Diskon Melimpah</CardText>
				</Card>
				<Card>
					<AiOutlineStar size={35}/>
                    <CardText>Kualitas Terbaik</CardText>
				</Card>
				<Card>
					<AiOutlineSafety size={35}/>
                    <CardText>Keamanan Terjaga</CardText>
				</Card>
			</Wrapper>
		</Container>
	);
};

export default Feature;
