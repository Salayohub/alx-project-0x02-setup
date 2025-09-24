import { type ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ size = "md", shape = "rounded-md" }) => {
  const baseStyles = "px-4 py-2 text-white font-semibold";

  const sizeStyles =
    size === "sm" ? "text-sm" : size === "md" ? "text-md" : "text-lg";

  const shapeStyles = shape;

  return (
    <button className={`${baseStyles} ${sizeStyles} ${shapeStyles}`}>
      Button
    </button>
  );
};

export default Button;
