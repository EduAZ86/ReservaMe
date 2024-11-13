import { InputHTMLAttributes } from "react";
import { FieldErrors, FieldValues, UseFormRegister, UseFormWatch } from "react-hook-form";

export type StatusInput = "valid" | "invalid" | "void"
export interface IInputFIeldProps extends Pick<InputHTMLAttributes<HTMLInputElement>,
    | "type"
    | "value"
    | "onChange"
    | "onBlur"
    | "required"
> {
    register: UseFormRegister<FieldValues>;
    label?: string;
    name: string;
    requiredMessage?: string;
    hasError: boolean;
    watch: UseFormWatch<FieldValues>
}