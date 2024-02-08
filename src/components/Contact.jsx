const Contact = () => {
  return (
    <section id="contacts" className="w-[1280px] px-[30px] mx-auto pb-20">
      <h2 className="text-4xl mb-5 text-center">Контакти:</h2>
      <ul>
        <li className="flex flex-col gap-5 mb-20">
          <h3 className="font-bold text-2xl text-center">
            Вижницьке відділення
          </h3>
          <div className="flex gap-8 justify-center">
            <div className="text-lg">
              <h4 className=" font-medium">Адрес:</h4>
              <p className=" w-[260px] mb-4">
                м. Вижниця, Чернівецька обл. Вул. Українська 100/2
              </p>
              <h4 className="  font-medium">Графік роботи:</h4>
              <p>Пн - Пт : 08:00-18:00</p>
              <p className=" mb-4">Cб - Нд : 09:00-15:00</p>
              <h4 className=" font-medium">Контакти:</h4>
              <p>
                Тел.:{" "}
                <a className="underline text-blue-300" href="tel:+380988392107">
                  +38 098-83-92-107
                </a>{" "}
                Іван
              </p>
              <p>
                Email:{" "}
                <a className="text-blue-300" href="mailto:example@gmail.com">
                  example@gmail.com
                </a>
              </p>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1116.994512468906!2d25.19615325692938!3d48.25137099752174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4736bf9f6f5625a5%3A0xec669a8aaba990f7!2sINGCO!5e0!3m2!1suk!2sua!4v1707399697985!5m2!1suk!2sua"
              width="750"
              height="450"
              style={{ border: 0, borderRadius: "10px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </li>
        <li className="flex flex-col gap-5">
          <h3 className="font-bold text-2xl text-center">
            Герцаївське відділення
          </h3>
          <div className="flex gap-8 justify-center">
            <div className="text-lg">
              <h4 className=" font-medium">Адрес:</h4>
              <p className=" w-[250px] mb-4">
                м. Герца, Чернівецька обл. Вул. Штефана Великого 12
              </p>
              <h4 className="  font-medium">Графік роботи:</h4>
              <p>Пн - Пт : 08:00-18:00</p>
              <p className=" mb-4">Cб - Нд : 09:00-15:00</p>
              <h4 className=" font-medium">Контакти:</h4>
              <p>
                Тел.:{" "}
                <a className="underline text-blue-300" href="tel:+380964123628">
                  +38 096-41-23-628
                </a>{" "}
                Руслан
              </p>
              <p>
                Email:{" "}
                <a className="text-blue-300" href="mailto:example@gmail.com">
                  example@gmail.com
                </a>
              </p>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2661.983445242985!2d26.259705065174927!3d48.14912438354212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473470fde4487dad%3A0x867d96e0ac92f7fa!2z0LLRg9C70LjRhtGPINCo0YLQtdGE0LDQvdCwINCS0LXQu9C40LrQvtCz0L4sIDEyLCDQk9C10YDRhtCwLCDQp9C10YDQvdGW0LLQtdGG0YzQutCwINC-0LHQu9Cw0YHRgtGMLCA2MDUwMA!5e0!3m2!1suk!2sua!4v1707399912138!5m2!1suk!2sua"
              width="750"
              height="450"
              style={{ border: 0, borderRadius: "10px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Contact;
