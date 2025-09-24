import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({
  small,
  medium,
  large,
  roundedsmall,
  roundedmedium,
  roundedlarge,
}) => {
  const baseStyles = "px-4 py-2 text-white font-semibold rounded";
  const sizeStyles = small ? "text-sm" : medium ? "text-md" : "text-lg";
  const roundedStyles = roundedsmall
    ? "rounded-sm"
    : roundedmedium
    ? "rounded-md"
    : roundedlarge
    ? "rounded-lg"
    : "";

  return <button className={`${baseStyles} ${sizeStyles} ${roundedStyles}`}>Button</button>;
};

export default Button;
