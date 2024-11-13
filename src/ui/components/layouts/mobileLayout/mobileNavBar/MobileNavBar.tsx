import { FC } from "react";
import { IMobileNavBarProps } from "./types";

export const MobileNavBar: FC<IMobileNavBarProps> = ({
    children
}) => {
    return (
        <div
            className={`
                w-full h-20 
                flex flex-row
                justify-around items-start
                p-2
                rounded-t-xl
                shadow-xl             
            `}
        >
            {children}
        </div>
    )
}