import React from "react";
import Header from "../containers/shared/header/Header";
import Footer from "../containers/shared/footer/Footer";
import NewsLetter from "../containers/shared/newsLetter/NewsLetter";
import ContactUs from "../containers/shared/contactUs/ContactUs";

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <NewsLetter/>
      <ContactUs/>
      <Footer />
    </>
  );
};

export default MainLayout;
