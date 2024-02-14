import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import CardList from "./components/CardList";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Social from "./components/Social";
import { useMediaQuery } from "react-responsive";
import "swiper/css/bundle";

function App() {
  const isDesktop = useMediaQuery({ query: "(min-width: 1280px)" });
  return (
    <>
      <Header isDesktop={isDesktop} />
      <main>
        <Hero />
        <About isDesktop={isDesktop} />
        <CardList isDesktop={isDesktop} />
        <Contact isDesktop={isDesktop} />
        {/* <Social /> */}
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default App;
