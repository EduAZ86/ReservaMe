import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { ButtonHTMLAttributes } from "react";

export interface ISocialButtonProps extends Pick<ButtonHTMLAttributes<HTMLButtonElement>,
    | "type"
    | "disabled"
    | "onClick"
    | "onFocus"
    | "onBlur"
    | "id"
    | "name"
    | "className"
> {
    icon: IconProp;
    isLoading?: boolean;
    iconColor?: string;
}