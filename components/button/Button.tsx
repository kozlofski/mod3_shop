import React from "react";

interface ButtonProps {
    type: "primary" | "secondary" | "tertiary",
    children: React.ReactNode,
    className?: string,
    onClick?: () => void
}

const typeClassMap: Record<ButtonProps["type"], string> = {
    primary: "bg-primaryBtn text-primaryBtnTxt",
    secondary: "bg-transparent border-secondaryBtn border text-secondaryBtn",
    tertiary: "bg-transparent border-tertiaryBtn border text-tertiaryBtn"
};

function getButtonClass(type: ButtonProps["type"], className?: string) {
    return `${typeClassMap[type]} px-[20px] rounded-md text-base flex gap-[14px] items-center ${className || ""}`;
}

const Button = ({ type, children, className }: ButtonProps) => {
    return (
        <button className={getButtonClass(type, className)} >{children}</ button>
    )
}

export default Button