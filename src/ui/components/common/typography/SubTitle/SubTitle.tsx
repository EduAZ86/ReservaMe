import { FC } from "react";
import { ISubTitleProps } from "./types";
import { twMerge } from "tailwind-merge";

export const SubTitle: FC<ISubTitleProps> = ({
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
                text-xl
                font-metropolis-regular
                text-light-text dark:text-dark-text
                
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