import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import CardList from "./components/CardList";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Social from "./components/Social";
import ButtonToTop from "./components/ButtonToTop";
import { useMediaQuery } from "react-responsive";
import "swiper/css/bundle";
import { useEffect, useState } from "react";

function App() {
  const isDesktop = useMediaQuery({ query: "(min-width: 1280px)" });
  const [scrolled, setScrolled] = useState(window.scrollY > 200);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 800);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("touchmove", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("touchmove", handleScroll);
    };
  }, []);

  return (
    <>
      <Header isDesktop={isDesktop} />
      <main>
        <Hero />
        <About isDesktop={isDesktop} />
        <CardList isDesktop={isDesktop} />
        <Contact isDesktop={isDesktop} />
        <Social />
        {!isDesktop && scrolled && <ButtonToTop />}
      </main>
      <Footer isDesktop={isDesktop} />
    </>
  );
}

export default App;
