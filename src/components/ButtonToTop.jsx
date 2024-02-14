const ButtonToTop = () => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <button
      onClick={handleClick}
      className="fixed right-3 bottom-9 h-[40px] sm:h-[50px] w-[40px] sm:w-[50px] rounded-full bg-[#ffaf0282] flex items-center justify-center shadow-xl z-50"
    >
      <svg width="20" height="20">
        <use href="./sprite.svg#icon-arrow-up2"></use>
      </svg>
    </button>
  );
};

export default ButtonToTop;
