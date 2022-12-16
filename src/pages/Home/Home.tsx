import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Layout from "../../components/Layout/Layout";
import React from "react";

function Home() {
  return (
    <>
      <Header />
      <Layout
        textTitle={"Boas vindas a Lacrei Saúde"}
        textSubtitle={
          "Uma plataforma segura e acolhedora para comunidade LGBTQIAPN+"
        }
        imageType="home"
      />
      <Footer />
    </>
  );
}

export default Home;
