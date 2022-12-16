import Button from "../Button/Button";
import ImageLayout from "../ImageLayout/ImageLayout";

import {
  Container,
  ContainerButton,
  ContainerTitle,
  Subtitle,
  Title,
} from "./LayoutStyle";

interface LayoutProps {
  textTitle: string;
  textSubtitle: string;

  imageType: string;
}

const Layout: React.FC<LayoutProps> = ({
  imageType,
  textTitle,
  textSubtitle,
}) => {
  return (
    <Container>
      <ContainerTitle>
        <Title>{textTitle}</Title>
        <Subtitle>{textSubtitle}</Subtitle>

        <ContainerButton>
          <Button buttonType="primary" textButton="Pessoa Usuária" />

          <Button buttonType="secondary" textButton="Profissional" />
        </ContainerButton>
      </ContainerTitle>

      <ImageLayout imageType={imageType} />
    </Container>
  );
};

export default Layout;
