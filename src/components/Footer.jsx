import Button from "./Button";
import logo from "../assets/img/ingcoLogo.webp";

const Footer = () => {
  return (
    <footer className="bg-[#FFAF02] h-20">
      <div className="container mx-auto px-[30px] grid grid-cols-6 py-2 items-center xl:w-[1280px]">
        <div className="flex col-span-3">
          <img src={logo} alt="logo" className="mr-1" />
        </div>
        <div className="col-start-5 flex items-center">
          <Button destination={"#about"}>Про нас</Button>
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
    </footer>
  );
};

export default Footer;
