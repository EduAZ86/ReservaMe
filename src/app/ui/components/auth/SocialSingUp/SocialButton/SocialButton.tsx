import { FC } from "react";
import { ISocialButtonProps } from "./types";
import { twJoin, twMerge } from "tailwind-merge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Loader } from "../../../common";


export const SocialButton: FC<ISocialButtonProps> = ({
    icon,
    isLoading,
    className,
    iconColor,
    ...otherButtonProps
}) => {
    return (
        <button
            {...otherButtonProps}
            className={twMerge(
                ` 
                group               
                w-20 h-16
                block
                justify-center
                items-center
                rounded-xl
                shadow-lg
                bg-light-secondary dark:bg-dark-secondary
               
                active:scale-95 active:shadow-inner duration-300
                relative
                `,
                className && className,
                iconColor && iconColor 
            )}
        >
            {isLoading ?
                <Loader />
                :
                <FontAwesomeIcon
                    className=" w-full h-8 text-center duration-300 group-hover:scale-110"                   
                    icon={icon}
                />
            }           
        </button>
    )

}