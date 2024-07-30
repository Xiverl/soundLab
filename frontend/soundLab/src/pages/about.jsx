import Carusel from "../components/carusel/carusel";
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
			<hr class="hr-primary"></hr>
			<Gallery />
			<hr class="hr-primary"></hr>
			<Info />
			<hr class="hr-primary"></hr>
			<Products />
			<Footer />
    </>
  )
};

export default About;