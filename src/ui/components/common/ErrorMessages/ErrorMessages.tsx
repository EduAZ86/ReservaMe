import { FC } from "react";
import { IErrorMessagesProps } from "./types";

export const ErrorMessages: FC<IErrorMessagesProps> = ({
    errors
}) => {
    if (!errors) {
        return null;
    }
    return (
        <ul
            className={`list-disc list-inside text-xs text-red-500`}
        >
            {Object.keys(errors).map((fieldName) => (
                <li 
                    key={fieldName}
                    className="mb-1"
                >
                    {errors[fieldName].message}
                </li>
            ))}
        </ul>
    );
}