import { FC } from "react";
import { ICaptionProps } from "./types";
import { twMerge } from "tailwind-merge";

export const Caption: FC<ICaptionProps> = ({
    text,
    className,
    isButton,
    ...otherCaptionProps
}) => {
    return (
        <span
            {...otherCaptionProps}
            className={twMerge(
                `
                text-sm                
                text-light-text dark:text-dark-text
                font-metropolisRegular
                `,
                isButton && `
                    cursor-pointer                     
                    hover:text-black
                    active:scale-[99%]`
                ,
                className && className
            )}
        >
            {text}
        </span>
    )
}