import { HTMLAttributes } from "react";

export interface ISubTitleProps extends Pick<HTMLAttributes<HTMLParagraphElement>,
    | "className"
    | "id"
    | "onClick"
> {
    text: string;
    isButton?: boolean;
}