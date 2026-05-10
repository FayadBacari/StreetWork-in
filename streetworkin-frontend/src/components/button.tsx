import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Anton } from "next/font/google";
import "./ui/button.css";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
});

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: "default" | "anton";
};

export default function Button({
  children,
  type = "button",
  className,
  variant = "default",
  ...rest
}: ButtonProps) {
  const cn = [
    "button",
    variant === "anton" && anton.variable,
    variant === "anton" && "button--anton",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button type={type} className={cn} {...rest}>
      {children}
    </button>
  );
}
