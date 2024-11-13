import { FC } from "react";
import { IAuthContainerProps } from "./types";

export const AuthContainer: FC<IAuthContainerProps> = ({ children }) => {
    return (
        <div
            className={
            `
            w-full h-full
            min-h-[90vh]
            px-4 py-10
            bg-light-background dark:bg-dark-background
            grid grid-rows-7
            relative
            `
            }
        >
            {children}
        </div>
    );
}