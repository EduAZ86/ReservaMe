import { FC, } from "react"
import { IInputFIeldProps } from "./types"
import { faCheck, faX } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const InputField: FC<IInputFIeldProps> = ({
    type,
    label,
    name,
    register,
    hasError,
    watch,
    requiredMessage,
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
                    duration-300
                    ${hasError ? " border-light-error dark:border-dark-error" : "border-transparent"}
                `}
        >
            <label
                htmlFor={name}
                className={
                    `                   
                     text-xs font-metropolisLight           
                     ${hasError ? "text-light-error dark:text-dark-error" : "text-light-acent dark:text-dark-acent"}
                      
                    `}
            >
                {label}
            </label>
            <div className="w-full h-fit flex flex-row items-center gap-2">
                <input
                    {...otherInputProps}
                    autoComplete="off"
                    type={type}
                    {...register(name)}
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
                { }
                {hasError &&
                    <FontAwesomeIcon
                        className={`
                        h-5
                       text-light-error dark:text-dark-error
                        `}
                        icon={faX}
                    />
                }
                {!hasError &&
                    <FontAwesomeIcon
                        className={`
                        h-6                        
                            ${(watch(name) === "" || watch(name) === undefined)
                                ? "text-light-background dark:text-dark-background"
                                : "text-light-success dark:text-dark-success"
                            }
                        `}
                        icon={faCheck}
                    />
                }
            </div>
        </div>
    )
}