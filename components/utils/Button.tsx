import React, { ReactNode } from 'react';
import { HiOutlineArrowLongRight } from "react-icons/hi2"
interface ButtonProps {
    variant: 'with-icon' | 'default';
    children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant, children }) => {
    const className = "flex w-fit items-center text-black font-medium border-black border-2 rounded-full px-10 py-3 bg-white hover:scale-105 group capitalize transition-all duration-300 ease-linear"
    const variants = {
        "default": <div className={className}>
            {children}
        </div>,
        "with-icon": <div className={className}>
            {children}
            <span className="icon pl-2 text-2xl group-hover:pl-4 transition-all duration-300 ease-linear"><HiOutlineArrowLongRight /></span>
        </div>
    }
    return variants[variant]
};

export default Button;
