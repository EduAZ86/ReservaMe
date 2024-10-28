import { FC } from "react";
import { IMainButtonProps } from "./types";
import { twMerge } from "tailwind-merge";
import { Loader } from "../../Loader/Loader";

export const MainButton: FC<IMainButtonProps> = ({
    text,
    variant,
    className,
    isLoading,
    ...otherButtonProps

}) => {
    return (
        <button
            {...otherButtonProps}
            className={twMerge(
                `w-full h-12 
                block 
                justify-center 
                items-center
                rounded-l-full rounded-r-full
                font-metropolisMedium
                border-solid border-2
                
                text-sm
                `,
                variant === "background" && `
               bg-light-primary dark:bg-dark-primary
               border-light-primary dark:border-dark-primary
               text-light-secondary dark:text-dark-secondary
               hover:bg-light-secondary dark:hover:bg-dark-secondary
               hover:text-light-primary dark:hover:text-dark-primary
               ` ,
                variant === "transparent" && `
                bg-transparent dark:bg-transparent
                border-light-secondary dark:border-dark-secondary
                text-light-secondary dark:text-dark-secondary
                hover:bg-light-primary dark:hover:bg-dark-primary
                `,
                className && className
            )}
        >
            {
                isLoading
                    ?
                    <Loader />
                    :
                    text.toUpperCase()
            }
        </button>
    )
}