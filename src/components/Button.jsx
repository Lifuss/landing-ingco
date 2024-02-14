const Button = ({ children, destination }) => {
  return (
    <a
      href={destination}
      className="px-4 py-1 bg-white rounded-[15px] w-fit text-lg font-medium"
    >
      {children}
    </a>
  );
};

export default Button;
