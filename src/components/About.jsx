const About = ({ isDesktop }) => {
  return (
    <section
      id="about"
      className="xl:w-[1280px] xl:px-[30px] mx-auto flex xl:gap-[80px] mb-5 xl:mb-20"
    >
      {isDesktop && (
        <img
          className="w-[633px]"
          src="./images/aboutImg.webp"
          alt="Бензопила в магазині"
        />
      )}
      <div className=" max-xl:bg-gradient-overlay  max-xl:bg-center  max-xl:bg-cover  max-xl:bg-no-repeat  max-xl:w-full max-xl:px-3 pb-4 pt-2">
        <h2 className="text-2xl font-semibold xl:text-4xl mb-4 text-center">
          ПРОПОНУЄМО:
        </h2>
        <ul className="text-base font-medium xl:text-2xl px-5 list-disc flex flex-col gap-[8px] xl:gap-[30px]">
          <li>
            Понад 360 електроінструментів,що працюють від єдиного акумулятора{" "}
          </li>
          <li>Партнерські відносини та індивідуальний підхід</li>
          <li>Супровід та допомогу в подальшому використанні</li>
          <li>Великий асортимент інструментів, обладнання та розхідників</li>
          <li>Можливість закупівлі гуртом та дропшипінгу </li>
          <li>
            Нижча ціна за рахунок можливості придбання інструменту без
            акумулятора
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
