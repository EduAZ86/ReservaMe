
export type TErrors = {
    [key: string]: {
        type: string;
        message: string;
    }
}

export interface IErrorMessagesProps {
    errors: TErrors | undefined;
}