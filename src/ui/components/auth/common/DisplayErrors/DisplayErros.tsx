import { FC } from "react";
import { IErrorDisplayProps } from "./types";

export const DisplayErrors: FC<IErrorDisplayProps> = ({
    errors
}) => {
    if (!errors) return null;
    const hasErrors = Object.keys(errors).length > 0;
    return (
        <div
            className={`flex flex-col gap-1  transition-all duration-700 ease-in-out overflow-hidden 
                ${hasErrors ? "opacity-100 max-h-40" : "opacity-0 max-h-0"}           
                `}
        >
            {Object.entries(errors).map(([key, value]) => (
                <p key={key}
                    className={`text-light-error dark:text-dark-error font-metropolisLight text-sm
                    transition-opacity duration-700 ease-in-out transform opacity-100
                    ${value ? 'opacity-100 max-h-5 ' : 'opacity-0 max-h-0'}`}
                >
                    {value?.message?.toString()}
                </p>
            ))}
        </div>
    )
}