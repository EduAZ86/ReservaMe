import { FC } from "react";
import { IUserButtonProps } from "./types";

export const UserButton: FC<IUserButtonProps> = ({
    src,
    onClick,
}) => {
    return (
        <button
            onClick={onClick}
            className={`
              w-12 h-12 rounded-full overflow-hidden
              p-1
              shadow-lg  
            `}
        >
            <img
                className="w-full h-full  rounded-full object-cover"
                src={src}
                alt="user"
            />
        </button>
    )
}