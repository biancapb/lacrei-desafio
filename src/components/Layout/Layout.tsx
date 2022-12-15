import Button from "../Button/Button";
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
      <Button buttonType="primary" textButton="Pessoa Usuária" />

      <Button buttonType="secondary" textButton="Profissional" />
    </Container>
  );
};

export default Layout;
