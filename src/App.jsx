import "./app.scss"
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return <div>
    <section id="Home">
      <Navbar/>
      <Hero/>
    </section>
    <section id="Services">Paralax</section>
    <section>Services</section>
    <section id="Portfolio">Paralax</section>
    <section>Port1</section>
    <section>Port2</section>
    <section>Port3</section>
    <section id="Contact">Contact</section>
  </div>;
};

export default App;
