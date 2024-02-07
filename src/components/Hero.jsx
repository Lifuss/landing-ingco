import heroImg from "../assets/img/hero.webp";
import fill from "../assets/img/filling.png";

const Hero = () => {
  return (
    <section
      className="mb-20"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.35), rgba(255, 255, 255, 0.35)), url(${fill})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100%",
      }}
    >
      <img
        className="mx-auto h-[580px] object-cover object-center"
        src={heroImg}
        alt="Інструменти з логотипом Ingco"
      />
    </section>
  );
};

export default Hero;
