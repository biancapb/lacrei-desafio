import { Container, TabText, TabItem } from "./TabsStyle";

const Tabs = (): JSX.Element => {
  return (
    <>
      <Container>
        <TabItem>
          <TabText href="/">Home</TabText>

          <TabText href="/usuario">Pessoa Usuária</TabText>

          <TabText href="/profissional">Profissional</TabText>
        </TabItem>
      </Container>
    </>
  );
};

export default Tabs;
