const Label = ({
  className,
  children,
  ...props
}: {
  className: string;
  children: any;
}) => (
  <label
    className={`${className} block font-medium text-sm text-gray-700 mb-5`}
    {...props}
  >
    {children}
  </label>
);

export default Label;
