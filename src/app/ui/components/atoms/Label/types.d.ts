import { LabelHTMLAttributes } from "react";

export interface ILabelProps extends Pick<LabelHTMLAttributes<HTMLLabelElement>,
    | "htmlFor"

> {
    text: string
}