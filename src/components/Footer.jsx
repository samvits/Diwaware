import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, X } from "@mui/icons-material";
import styled from "styled-components"

const Container = styled.div`
    display: flex;
`;
const Left = styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Logo = styled.h1`
    
`;
const Desc = styled.p`
    margin: 20px 0px;
`;

const SocialContainer = styled.div`
    display: flex;
`;

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color:white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;

`;

const Center = styled.div`
    flex:1;
    padding: 20px;
`;

const Title = styled.h3`
    margin-bottom: 30px;
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`;

const Right = styled.div`
    flex:1;
    padding: 20px;
`;

const Payment = styled.img`
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: center;

`;

const ContactItem = styled.div`
    margin-bottom:20px;
    display: flex;
    align-items: center;
`;

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>DIVAWARE.</Logo>
            <Desc>Elevate Your Style, Embrace Your Elegance. Explore a curated world of women's fashion where trends meet sophistication. 
                Unleash your inner diva with chic and timeless pieces at DIVAWARE - Your Ultimate Fashion 
                Destination.</Desc>
            <SocialContainer>
                <SocialIcon color="3B5999">
                    <Facebook/>
                </SocialIcon>
                <SocialIcon color="E4405F">
                    <Instagram/>
                </SocialIcon>
                <SocialIcon color="000000">
                    <X/>
                </SocialIcon>
                <SocialIcon color="E60023">
                    <Pinterest/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>

            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Women Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>New Releases</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>

            <Title>Contact</Title>
            <ContactItem><Room style={{marginRight:"10px"}}/>123 XYZ Lane, Sector 57, Gurgaon - 122003</ContactItem>
            <ContactItem><Phone style={{marginRight:"10px"}}/>+91 123 456 7890</ContactItem>
            <ContactItem><MailOutline style={{marginRight:"10px"}}/>contact@divaware.dev</ContactItem>
            <Payment src="https://as1.ftcdn.net/v2/jpg/05/89/45/84/1000_F_589458438_NjcRmqJWjA2Jk2YlMY2k5jKB4iCdRkAn.webp"/>
        </Right>
    </Container>
  )
}

export default Footer
