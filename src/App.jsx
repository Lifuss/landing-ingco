import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import CardList from "./components/CardList";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <CardList />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
