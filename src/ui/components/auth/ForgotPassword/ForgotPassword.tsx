"use client";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { IForgotPassword } from "./types";
import { MainButton } from "../../common/buttons";
import { zodResolver } from "@hookform/resolvers/zod";
import { forgotPasswordValidationSchema } from "../common";
import { BasicForm, Caption, InputField } from "../../common";
import { useForgotPassword } from "./useForgotPassword";
export const ForgotPassword: FC<IForgotPassword> = ({

}) => {
    const { register, formState: { errors }, handleSubmit, reset, watch, } = useForm({
        resolver: zodResolver(forgotPasswordValidationSchema),
        mode: "onChange"
    })

    const { mutate: sendEmail, isPending, isSuccess, status, error } = useForgotPassword()

    const onSubmit = handleSubmit(async (data) => {
        const { email } = data;
        sendEmail({ email })
        if (isSuccess) {
            reset();
        }
    })
    return (
        <div
            className={`
                row-span-4 bg-transparent
                h-full w-full 
                flex flex-col 
                justify-between items-center
                gap-4
            `}>
            <BasicForm
                transparent
                onSubmit={onSubmit}
            >
                <div className="w-full h-full flex flex-col gap-8">
                    <div
                        className={`
                            w-full h-fit
                            flex flex-col
                            gap-4 `}
                    >
                        <Caption
                            text="Por favor, introduzca su dirección de correo electrónico. Recibirá un enlace para crear una nueva contraseña por correo electrónico."

                        />
                        <InputField
                            key={"email"}
                            label="Email"
                            name="email"
                            hasError={!!(errors.email)}
                            register={register}
                            watch={watch}
                        />
                    </div>
                    <MainButton
                        text="Enviar"
                        variant="background"
                        type="submit"
                        isLoading={isPending}
                    />
                </div>
            </BasicForm>
        </div>

    )
}