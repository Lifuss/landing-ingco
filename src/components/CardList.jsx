import { items } from "../service/constants";

const CardList = () => {
  return (
    <section className="w-[1280px] mx-auto px-[30px] mb-20">
      <h2 className="text-4xl text-center mb-5">Популярні товари</h2>
      <ul className="flex flex-wrap gap-[70px]">
        {items.map(({ code, title, desc, img }) => {
          const splitDesc = desc.split("/b");
          return (
            <li
              key={code}
              className="flex flex-col w-[360px] h-[480px] shadow-lg rounded-2xl"
            >
              <img
                className=" h-[330px] object-contain mb-3"
                src={`./images/${img}`}
                alt={title}
              />
              <div className="px-4">
                <h3 className="text-[#FACC15] text-xl font-medium">{code}</h3>
                <h4 className="font-medium text-lg">{title}</h4>
                <p className="text-base font-semibold text-[#9CA3AF]">
                  {splitDesc.map((item, index) => (
                    <span key={index} className="block">
                      {item}
                    </span>
                  ))}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default CardList;
