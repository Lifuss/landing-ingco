import Button from "./Button";
import logo from "../assets/img/ingcoLogo.webp";

const Header = () => {
  return (
    <header className="bg-[#FFAF02] h-24 border border-b-2 border-[rgb(0,0,0,0.2)]">
      <div className="container mx-auto px-[30px] grid grid-cols-6 py-2 items-center xl:w-[1280px]">
        <div className="flex col-span-3">
          <img src={logo} alt="logo" className="mr-1" />
          <div className="flex flex-col">
            <p className="text-2xl font-bold">Офіційний</p>
            <p className="text-2xl font-bold">дилер в Україні</p>
          </div>
        </div>
        <div className="flex flex-col gap-1 col-start-5">
          <Button destination={"#about"}>Про нас</Button>
          <Button destination={"#contacts"}>Контакти</Button>
        </div>

        <address className="flex flex-col gap-1 text-xl not-italic">
          <p>
            <a className="underline text-blue-500 " href="tel:+380988392107">
              098-83-92-107
            </a>{" "}
            Іван
          </p>
          <p>
            <a className="underline text-blue-500 " href="tel:+380964123628">
              096-41-23-628
            </a>{" "}
            Руслан
          </p>
        </address>
      </div>
    </header>
  );
};

export default Header;
