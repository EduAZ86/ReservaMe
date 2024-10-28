import { FC } from "react";
import { IForgotPassword } from "./types";
import { BasicForm, Caption, InputField, Title } from "../../common";
import Link from "next/link";
import { MainButton } from "../../common/buttons";
export const ForgotPassword: FC<IForgotPassword> = ({

}) => {
    return (
        <div
            className={
                `
            w-full h-full
            min-h-[90vh]
            px-4 py-10
            bg-light-background dark:bg-dark-background
            grid grid-rows-7
            relative
            `
            }
        >
            <div className="row-span-1">
                <Title
                    text="Recupera tu contraseña"
                />
            </div>
            <div className={`
            row-span-4 bg-transparent
            h-full w-full 
            flex flex-col 
            justify-between items-center
            gap-4
            `}>
                <BasicForm
                    transparent
                >
                    <div className="w-full h-full flex flex-col gap-8">
                        <div
                            className={
                                `
                        w-full h-fit
                        flex flex-col
                        gap-4
                     
                        `}
                        >
                            <Caption
                                text="Por favor, introduzca su dirección de correo electrónico. Recibirá un enlace para crear una nueva contraseña por correo electrónico."

                            />
                            <InputField
                                label="Contraseña"
                                type="password"
                                status="invalid"
                            />
                        </div>
                        <MainButton
                            text="Enviar"
                            variant="background"
                        />
                    </div>
                </BasicForm>
            </div>
        </div>
    )
}