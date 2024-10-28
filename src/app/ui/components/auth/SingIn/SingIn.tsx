import { FC } from "react";
import { ISingInProps } from "./types";
import { BasicForm, Caption, InputField, Title } from "../../common";
import { MainButton } from "../../common/buttons";
import Link from "next/link";
import { SocialSingUp } from "../SocialSingUp/SocialSingUp";

export const SingIn: FC<ISingInProps> = ({

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
            <Title
                text="Inicia Sesión"
            />
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
                            <InputField
                                label="Email"
                                status="invalid"
                            />
                            <InputField
                                label="Contraseña"
                                type="password"
                                status="valid"
                            />
                            <Link
                                href="#"
                                className="w-full flex flex-row justify-end items-center gap-1"
                            >
                                <Caption
                                    text="¿Olvidaste tu contraseña?"
                                    isButton
                                />
                                <span className="text-light-primary dark:text-dark-primary text-lg text-center" > ⮕</span>
                            </Link>
                        </div>
                        <MainButton
                            text="Iniciar Sesion"
                            variant="background"
                        />
                    </div>
                </BasicForm>
            </div>
            <div className="row-span-2">
                <SocialSingUp />
            </div>
        </div>
    )
}