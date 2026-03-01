type ButtonProps = {
  name: string;
};

export const CustomButton = ({ name }: ButtonProps) => {
  return (
    <>
      <button
        className="border border-gray-400 px-10 py-2 text-gray-600 
        hover:border-pink-600 hover:shadow-sm cursor-pointer transition-all duration-500"
      >
        {name}
      </button>
    </>
  );
};
