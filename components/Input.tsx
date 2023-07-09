const Input = ({ className, ...props }: { className: string }) => (
  <input
    className={`${className} w-full px-4 h-[50px] border-[1px] rounded-sm shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50`} // Pass the value prop to the input element
    {...props}
  />
);

export default Input;
