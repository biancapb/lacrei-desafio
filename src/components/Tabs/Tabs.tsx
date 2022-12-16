import { Link } from "react-router-dom";
import { Container, TabText, TabItem } from "./TabsStyle";

const Tabs = (): JSX.Element => {
  return (
    <>
      <Container>
        <TabItem>
          <TabText active>
            <Link to="/">Home</Link>
          </TabText>

          <TabText>
            <Link to="/user">Pessoa Usuária</Link>
          </TabText>

          <TabText>
            <Link to="/professional">Profissional</Link>
          </TabText>
        </TabItem>
      </Container>
    </>
  );
};

export default Tabs;
