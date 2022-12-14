import { Container, Subtitle, Title } from "./LayoutStyle";

interface LayoutProps {
  textTitle: string;
  textSubtitle: string;
}

const Layout: React.FC<LayoutProps> = ({ textTitle, textSubtitle }) => {
  return (
    <Container>
      <Title>{textTitle}</Title>
      <Subtitle>{textSubtitle}</Subtitle>
    </Container>
  );
};

export default Layout;
