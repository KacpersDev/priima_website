import Header from "./components/header/Header";
import Body from "./components/body/Body";
import Clients from "./components/clients/Clients";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Body />
      <Clients />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
