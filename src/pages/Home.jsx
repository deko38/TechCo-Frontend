import '../modules/Home.module.scss'
import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import OurProducts from "../components/OurProducts.jsx";
import Whyus from "../components/Whyus.jsx";

const Home= ()=> {

  return (
      <>
          <Navbar></Navbar>
          <Hero></Hero>
          <OurProducts></OurProducts>
<Whyus></Whyus>

      </>
  )
}

export default Home
