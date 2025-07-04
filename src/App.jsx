import "./App.css";
import Header from "../src/components/Header/Header";
import Footer from "../src/components/Footer/Footer";
import Hero from "../src/components/Hero/Hero";
import Approach from "../src/components/Approach/Approach";
import Testimonials from "../src/components/Testimonials/Testimonials";
import Projects from "../src/components/Projects/Projects";
import Contacts from "../src/components/Contacts/Contacts";
import Technology from "../src/components/Technology/Technology";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Technology />
      {/* <Projects />/ */}
      <Approach />
      <Testimonials />
      <Contacts />
      <Footer />
    </>
  );
}

export default App;
