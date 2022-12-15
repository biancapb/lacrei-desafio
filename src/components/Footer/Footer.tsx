import SocialMedia from "../SocialMedia/SocialMedia";
import Tabs from "../Tabs/Tabs";
import { Container, Divider, Text } from "./FooterStyle";
const Footer = (): JSX.Element => {
  return (
    <>
      <Divider></Divider>

      <Text>Desafio Front-end Lacrei</Text>

      <Tabs></Tabs>

      <Container>
        <SocialMedia
          redirect={"https://facebook.com"}
          socialType={"facebook"}
        />

        <SocialMedia
          redirect={"https://instagram.com"}
          socialType={"instagram"}
        />

        <SocialMedia
          redirect={"https://linkedin.com"}
          socialType={"linkedin"}
        />
      </Container>
    </>
  );
};

export default Footer;
