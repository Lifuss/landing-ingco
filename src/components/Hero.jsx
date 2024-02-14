import { useMediaQuery } from "react-responsive";

const Hero = () => {
  const isTableOrDesktop = useMediaQuery({ query: "(min-width: 720px)" });
  return (
    <section
      className="xl:mb-20"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4)), url('./images/filling.webp')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100%",
      }}
    >
      <h1 className="invisible h-0">
        Електричні та бензинові інструменти Ingco
      </h1>

      {isTableOrDesktop ? (
        <img
          className="mx-auto xl:h-[580px] object-cover object-center"
          src="./images/hero.webp"
          alt="Інструменти з логотипом Ingco"
        />
      ) : (
        <img
          className="mx-auto xl:h-[580px] object-cover object-center"
          src="./images/mobileHero.webp"
          alt="Інструменти з логотипом Ingco"
        />
      )}
    </section>
  );
};

export default Hero;
