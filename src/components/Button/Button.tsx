import { Container } from "./ButtonStyle";

interface ButtonProps {
  textButton?: string;
  buttonType: string;
}

const Button: React.FC<ButtonProps> = ({ buttonType, textButton }) => {
  return (
    <>
      <Container buttonType={buttonType}>{textButton}</Container>
    </>
  );
};

export default Button;
