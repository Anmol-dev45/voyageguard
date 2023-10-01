import React, { ReactNode } from "react";
import Link from "next/link";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

interface ButtonProps {
  variant?: "default" | "with-icon";
  children: ReactNode;
  href?: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = "default",
  children,
  href,
  className = "",
}) => {
  const baseClassName =
    "flex w-fit items-center text-black font-medium border-black border-2 rounded-full px-10 py-3 bg-white hover:scale-105 group capitalize transition-all duration-300 ease-linear";
  const classNames = `${baseClassName} ${className}`;

  const variants = {
    default: <div className={classNames}>{children}</div>,
    "with-icon": (
      <div className={classNames}>
        {children}
        <span className="icon pl-2 text-2xl group-hover:pl-4 transition-all duration-300 ease-linear">
          <HiOutlineArrowLongRight />
        </span>
      </div>
    ),
  };

  if (href) {
    return (
      <Link href={href}>
        <a>{variants[variant]}</a>
      </Link>
    );
  }

  return variants[variant];
};

export default Button;
