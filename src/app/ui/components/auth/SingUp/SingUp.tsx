import { FC } from "react";
import { ISingUpProps } from "./types";
import { BasicForm, Caption, InputField, Title } from "../../common";
import Link from "next/link";
import { MainButton } from "../../common/buttons";
import { SocialSingUp } from "../SocialSingUp/SocialSingUp";

export const SingUp: FC<ISingUpProps> = () => {
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
                text="Registrate"
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
                                label="Nombre"
                                name="name"
                                status="void"
                            />
                            <InputField
                                label="Email"
                                name="email"
                                status="void"
                            />
                            <InputField
                                label="Contraseña"
                                type="password"
                                status="invalid"
                                name="password"
                            />
                            <Link
                                href="#"
                                className="w-full flex flex-row justify-end items-center gap-1"
                            >
                                <Caption
                                    text="¿Ya tienes una cuenta?"
                                    isButton
                                />
                                <span className="text-light-primary dark:text-dark-primary text-lg text-center" > ⮕</span>
                            </Link>
                        </div>
                        <MainButton
                            text="Registrarse"
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