import { HTMLAttributes } from "react";

export interface ICaptionProps extends Pick<HTMLAttributes<HTMLParagraphElement>,
    | "className"
    | "id"
    | "onClick"
> {
    text: string;
    isButton?: boolean;
}