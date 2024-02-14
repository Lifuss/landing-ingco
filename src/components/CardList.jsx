import { items } from "../service/constants";
import Swiper from "swiper/bundle";
import { useEffect } from "react";

const CardList = ({ isDesktop }) => {
  useEffect(() => {
    if (!isDesktop) {
      new Swiper(".swiper", {
        loop: true,
        // spaceBetween: 10,
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 30,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        },
      });
    }
  }, [isDesktop]);

  return (
    <section className="xl:w-[1280px] mx-auto px-5 xl:px-[30px] mb-5 xl:mb-20">
      <h2 className="text-2xl xl:text-4xl text-center mb-5">
        Популярні товари
      </h2>
      {isDesktop ? (
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
      ) : (
        <div className="swiper w-full">
          {" "}
          <ul className="swiper-wrapper">
            {items.map(({ code, title, desc, img }) => {
              const splitDesc = desc.split("/b");
              return (
                <li
                  key={code}
                  className="flex flex-col w-[200px] h-[430px] rounded-2xl swiper-slide transition-all duration-300 ease-in-out"
                >
                  <img
                    className=" h-[220px] object-contain mb-3"
                    src={`./images/${img}`}
                    alt={title}
                  />
                  <div className="px-2">
                    <h3 className="text-[#FACC15] text-xl font-medium">
                      {code}
                    </h3>
                    <h4 className="font-medium text-base">{title}</h4>
                    <p className="text-sm font-semibold text-[#9CA3AF]">
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
        </div>
      )}
    </section>
  );
};

export default CardList;
