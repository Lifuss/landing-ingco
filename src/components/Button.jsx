const Button = ({ children, destination, padding = 4 }) => {
  return (
    <a
      href={destination}
      className={`px-${padding} py-1 bg-white rounded-[15px] w-fit text-lg font-medium`}
    >
      {children}
    </a>
  );
};

export default Button;
