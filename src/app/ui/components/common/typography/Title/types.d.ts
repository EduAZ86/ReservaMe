import { HTMLAttributes } from "react";


export interface ITitleProps extends Pick<HTMLAttributes<HTMLHeadingElement>,
    | "id"
    | "className"
> {
    text: string;
}