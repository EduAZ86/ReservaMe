import { FC } from "react"
import { IInputFIeldProps } from "./types"
import { faCheck, faCross, faX } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const InputField: FC<IInputFIeldProps> = ({
    type,
    label,
    name,
    register,
    requiredMessage,
    status,
    ...otherInputProps
}) => {


    return (
        <div
            className={`
                    w-full h-16
                    group 
                    flex flex-col 
                    relative
                    items-start justify-center
                    px-6 py-2
                    rounded-sm
                    font-metropolis-regular
                    bg-light-secondary dark:bg-dark-secondary
                    drop-shadow-sm                 
                    border-[1px] border-solid
                    focus:group
                    ${status === "invalid" ? " border-light-error dark:border-dark-error" : "border-transparent"}
                `}
        >
            <label
                htmlFor={name}
                className={
                    `                   
                     text-xs font-metropolisLight           
                     ${status === "invalid"  ? "text-light-error dark:text-dark-error" : "text-light-acent dark:text-dark-acent"}
                      
                    `}
            >
                {label}
            </label>
            <div className="w-full h-fit flex flex-row items-center gap-2">
                <input
                    {...otherInputProps}
                    autoComplete="off"
                    type={type}
                    className={
                        `
                    w-full h-fit
                    focus:outline-none focus:ring-0
                    bg-transparent
                    text-sm font-medium text-light-text dark:text-dark-text
                     placeholder-opacity-100 
                     
                    `
                    }
                />
                {}
                {status === "invalid"  &&
                    <FontAwesomeIcon
                        className={`
                        h-5
                       text-light-error dark:text-dark-error
                        `}
                        icon={faX}
                    />

                }
                {status === "valid" &&
                    <FontAwesomeIcon
                        className={`
                        h-6
                        text-light-success dark:text-dark-success
                        `}
                        icon={faCheck}
                    />
                }
                {status === "void" &&
                    <FontAwesomeIcon
                        className={`
                        h-6
                        text-light-background dark:text-dark-background
                        `}
                        icon={faCheck}
                    />
                }
            </div>
        </div>
    )
}