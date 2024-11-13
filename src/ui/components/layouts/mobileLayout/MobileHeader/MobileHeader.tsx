import { FC } from "react"
import { IMobileHeaderProps } from "./types"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons"
import { UserButton } from "../../common"
import { SubTitle } from "../../../common/typography/SubTitle/SubTitle"

export const MobileHeader: FC<IMobileHeaderProps> = ({
    userImage,
    href,
    Title,
    path
}) => {
    return (
        <header
            className={`
                w-full h-20
                grid grid-cols-5
                items-center
               bg-light-background dark:bg-dark-background
               shadow-md
                px-4
                `}
        >
            <Link
                className="col-span-1 text-xl text-light-text dark:text-dark-text"
                href={href}
            >
                <FontAwesomeIcon
                    className="w-8 h-8"
                    icon={faAngleLeft}
                />
            </Link>
            <div
                className="col-span-3 w-full h-full flex flex-row justify-center items-center"
            >
                <SubTitle
                    text={Title}
                />
            </div>
            <div
                className="col-span-1 w-full h-full flex justify-end items-center"
            >
                <UserButton
                    src={userImage}
                />
            </div>
        </header>
    )
}