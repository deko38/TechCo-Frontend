import '../modules/Home.module.scss'
import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import OurProducts from "../components/OurProducts.jsx";
import Card from "../components/Card.jsx";

const Home= ()=> {

  return (
    <>
<Navbar></Navbar>
        <Hero></Hero>
        <OurProducts></OurProducts>
        <Card></Card>
    </>
  )
}

export default Home
