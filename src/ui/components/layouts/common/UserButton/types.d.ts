import { ButtonHTMLAttributes } from "react";

export interface IUserButtonProps extends Pick<ButtonHTMLAttributes<HTMLButtonElement>,
    | "onClick"  
> {
    src: string;
}