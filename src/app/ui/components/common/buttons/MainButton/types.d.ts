import { ButtonHTMLAttributes } from "react";

type ButtonVariant = "background" | "transparent";
export interface IMainButtonProps extends Pick<ButtonHTMLAttributes<HTMLButtonElement>,
    | "type"
    | "disabled"
    | "onClick"
    | "onFocus"
    | "onBlur"
    | "id"
    | "name"
    | "className"
> {
    text: string;
    variant: ButtonVariant; 
    isLoading?: boolean;
}