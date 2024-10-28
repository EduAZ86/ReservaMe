import { FC } from "react";
import { ITitleProps } from "./types";
import { twMerge } from "tailwind-merge";

export const Title: FC<ITitleProps> = ({
    text,
    className,
    ...otherTitleProps
}) => {
    return (
        <h1
            {...otherTitleProps}
            className={twMerge(
                `text-4xl 
                font-metropolisBold
                text-light-text dark:text-dark-text
                `,
                className && className
            )}
        >
            {text}
        </h1>
    )
} 