export interface CardProps {
  title: string;
  content: string;
}

export interface ButtonProps {
  size?: "sm" | "md" | "lg";
  shape?: "rounded-sm" | "rounded-md" | "rounded-lg";
}
export interface ButtonProps {
  small?: boolean;
  medium?: boolean;
  large?: boolean;
  roundedsmall?: boolean;
  roundedmedium?: boolean;
  roundedlarge?: boolean;
}

export interface PostProps {
  id: number;
  title: string;
  content: string;
  userId: number;
}
