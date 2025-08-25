import React from "react";

interface ButtonProps {
    type: "primary" | "secondary" | "tertiary",
    children: React.ReactNode,
    onClick?: () => void
}

const typeClassMap: Record<ButtonProps["type"], string> = {
    primary: "bg-primaryBtn text-primaryBtnTxt",
    secondary: "bg-transparent border-secondaryBtn border text-secondaryBtn",
    tertiary: "bg-transparent border-tertiaryBtn border text-tertiaryBtn"
};

function getButtonClass(type: ButtonProps["type"]) {
    return `${typeClassMap[type]} px-[20px] h-[54px] rounded-md text-base w-fit flex gap-[14px] items-center`;
}

const Button = ({ type, children }: ButtonProps) => {
    return (
        <button className={getButtonClass(type)} >{children}</ button>
    )
}

export default Button