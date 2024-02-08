const Hero = () => {
  return (
    <section
      className="mb-20"
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
      <img
        className="mx-auto h-[580px] object-cover object-center"
        src="./images/hero.webp"
        alt="Інструменти з логотипом Ingco"
      />
    </section>
  );
};

export default Hero;
