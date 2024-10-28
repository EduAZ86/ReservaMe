import { InputHTMLAttributes } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

type StatusInput = "valid" | "invalid" | "void"
export interface IInputFIeldProps extends Pick<InputHTMLAttributes<HTMLInputElement>,
    | "type"
    | "value"
    | "onChange"
    | "onBlur"
    | "name"
    | "required"
> {
    register?: UseFormRegister<FieldValues>;
    label?: string;
    requiredMessage?: string;
    status: StatusInput
}