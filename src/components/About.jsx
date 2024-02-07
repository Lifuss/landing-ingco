import aboutImg from "../assets/img/aboutImg.webp";

const About = () => {
  return (
    <section
      id="about"
      className="w-[1280px] px-[30px] mx-auto flex gap-[80px] mb-20"
    >
      <img className="w-[633px]" src={aboutImg} alt="Бензопила в магазині" />
      <div>
        <h2 className="text-4xl mb-4 text-center">ПРОПОНУЄМО:</h2>
        <ul className="text-2xl  list-disc flex flex-col gap-[30px]">
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
