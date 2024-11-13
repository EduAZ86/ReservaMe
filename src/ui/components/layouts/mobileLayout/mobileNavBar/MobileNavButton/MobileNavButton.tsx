import Link from "next/link"
import { FC } from "react"
import { IMobileNavButtonProps } from "./types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const MobileNavButton: FC<IMobileNavButtonProps> = ({
    href,
    icon,
    title,
    isSelected
}) => {
    return (
        <Link
            title={title}
            className={`
                w-14 h-14
                flex flex-col 
                justify-center items-center
                py-1         
                gap-1
                active:shadow-inner 
                duration-300
                ${isSelected
                    ? "text-light-primary dark:text-dark-primary shadow-inner"
                    : "text-dark-acent dark:text-light-acent shadow-none"
                }

            `}
            href={href}
        >
            <FontAwesomeIcon
     
                className={`
                         h-8                       
                    `}
                icon={icon}
            />
            <span
                className="font-metropolis-regular text-[10px]"
            >
                {title}
            </span>
        </Link>
    )
}
