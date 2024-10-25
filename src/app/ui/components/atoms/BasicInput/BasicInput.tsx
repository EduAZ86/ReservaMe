import { FC } from "react";
import { IInputFieldProps } from "./types";

export const InputField: FC<IInputFieldProps> = ({
    register,
    name,
    requiredMessage,
    ...otherProps

}) => {
    return (

        <input
            {...register(name,
                {
                    required: requiredMessage !== undefined,
                    message: requiredMessage
                })}
            {...otherProps}
            className={`
                w-full h-12 rounded-md
                dark:bg-dark-background bg-light-background
                dark:text-dark-acent text-light-acent
                px-3
                focus:outline-none focus:ring-1
                text-xs
                focus:ring-light-secondary dark:focus:ring-dark-secondary
            `}
        />
    )
}