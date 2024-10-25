import { InputHTMLAttributes } from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

export interface IBasicInputProps extends Pick<InputHTMLAttributes<HTMLInputElement>,
  | "type"
  | "id"
  | "placeholder"
  | "value"
  | "onChange"
  | "disabled"
  | "className"
  | "required"
  | "name"
> {
  name: string;
  register: UseFormRegister;
  requiredMessage?: string; 
}