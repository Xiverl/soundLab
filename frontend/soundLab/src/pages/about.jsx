import Carusel from "../components/carusel/carusel";
import ContactModal from "../components/contact-modal/contact-modal";
import Footer from "../components/footer/footer";
import Gallery from "../components/gallery/gallery";
import InfoService from "../components/info-service/info-service";
import Info from "../components/info/info";
import Products from "../components/products/products";

function About() {
	return (
    <>
      <Carusel />
			<InfoService />
			<Gallery />
			<Info />
			<Products />
			<ContactModal />
			<Footer />
    </>
  )
};

export default About;