import React from "react";

interface ButtonProps {
    type: "primary" | "secondary" | "tertiary",
    text: string
}

const typeClassMap: Record<ButtonProps["type"], string> = {
    primary: "bg-primaryBtn text-primaryBtnTxt",
    secondary: "bg-transparent border-secondaryBtn border text-secondaryBtn",
    tertiary: "bg-transparent border-tertiaryBtn border text-tertiaryBtn"
};

function getButtonClass(type: ButtonProps["type"]) {
    return `${typeClassMap[type]} px-2.5 py-1.5 rounded-md text-base w`;
}

const Button = ({ type, text }: ButtonProps) => {
    return (
        <button className={getButtonClass(type)} >{text}</ button>
    )
}

export default Button