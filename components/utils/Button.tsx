import React, { ReactNode } from 'react';
import { HiOutlineArrowLongRight } from "react-icons/hi2"
interface ButtonProps {
    variant?: 'withIcon';
    children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant, children }) => {
    return (
        <button className="flex items-center text-black font-medium border-black border-2 rounded-full px-10 py-3 bg-white hover:scale-105 group capitalize transition-all duration-300 ease-linear">
            {children}
            {variant === 'withIcon' && (
                <span className="icon pl-2 text-2xl group-hover:pl-4 transition-all duration-300 ease-linear"><HiOutlineArrowLongRight /></span>
            )}
        </button>
    );
};

export default Button;
