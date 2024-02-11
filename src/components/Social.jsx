const Social = () => {
  return (
    <section className="w-[1280px] px-[30px] mx-auto flex flex-col items-center pb-14">
      <h2 className="text-4xl font-medium mb-4">Ми у соціальних мережах:</h2>
      <div className="flex gap-14">
        <a
          href=""
          target="_blank"
          rel="noreferrer"
          className="hover:scale-125 transition-all duration-300 ease-in-out"
        >
          <svg width="50" height="50">
            <use href="./sprite.svg#icon-viber"></use>
          </svg>
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=61556075234289"
          target="_blank"
          rel="noreferrer"
          className="hover:scale-125 transition-all duration-300 ease-in-out"
        >
          <svg width="50" height="50">
            <use href="./sprite.svg#icon-facebook"></use>
          </svg>
        </a>
        <a
          href="https://t.me/+IePpWvT99J02NTJi"
          target="_blank"
          rel="noreferrer"
          className="hover:scale-125 transition-all duration-300 ease-in-out"
        >
          <svg width="50" height="50">
            <use href="./sprite.svg#icon-telegram"></use>
          </svg>
        </a>
        <a
          href="https://www.instagram.com/ingco_ukraine/"
          target="_blank"
          rel="noreferrer"
          className="hover:scale-125 transition-all duration-300 ease-in-out"
        >
          <img
            width={50}
            height={50}
            src="./images/instagram.webp"
            alt="intstagram"
          />
        </a>
      </div>
    </section>
  );
};

export default Social;
