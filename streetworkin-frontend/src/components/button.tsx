import type { ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  href?: string;
};

export default function Button({
  children,
  type = "button",
  className,
  href,
  ...rest
}: ButtonProps) {
  if (href) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={className} {...rest}>
      {children}
    </button>
  );
}
