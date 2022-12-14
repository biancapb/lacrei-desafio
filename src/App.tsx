import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Layout from "./components/Layout/Layout";
import "./index.css";

function App() {
  return (
    <>
      <Header />
      <Layout
        textTitle={"Boas vindas a Lacrei Saúde"}
        textSubtitle={
          "Uma plataforma segura e acolhedora para comunidade LGBTQIAPN+"
        }
      />
      <Footer />
    </>
  );
}

export default App;
