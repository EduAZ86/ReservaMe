import { FC } from "react";
import { IBasicFormProps } from "./types";
import { twMerge } from "tailwind-merge";

export const BasicForm: FC<IBasicFormProps> = ({ 
    children,
    className,
    transparent,
    ...otherFormProps
}) => {
    return (
        <form
            {...otherFormProps}
            className={twMerge(
                `
                w-full h-full
                flex flex-col                           
                ${transparent ? "bg-transparent" : "bg-light-background dark:bg-dark-background"}
                `,
                className               
            )}
        >
            {children}
        </form>
    )
}