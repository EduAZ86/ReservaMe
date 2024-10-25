import { FC } from "react"
import { ILabelProps } from "./types"

export const Label: FC<ILabelProps> = ({
    text,
    ...props
}) => {
    return (
        <label
            {...props}
            className={`text-xs
                dark:text-dark-acent text-light-acent
                mb-1
            `}
        />
    )
}