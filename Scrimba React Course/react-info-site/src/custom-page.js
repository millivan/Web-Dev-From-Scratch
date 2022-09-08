import React from "react";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { MainContent } from "./components/main-content";

export const CustomPage = () => {
  return (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  );
};
