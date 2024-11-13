import { FormHTMLAttributes } from "react";

export interface IBasicFormProps extends Pick<FormHTMLAttributes<HTMLFormElement>,
    | "onSubmit"
    | "onReset"
    | "onChange"
    | "children"
    | "className"
> {
    transparent?: boolean
}