"use client";
import { FC } from "react";
import Link from "next/link";
import { ISingInProps } from "./types";
import { useForm } from "react-hook-form";
import { useLoginUser } from "./useSingIn";
import { MainButton } from "../../common/buttons";
import { singInValidationSchema } from "../common";
import { zodResolver } from "@hookform/resolvers/zod";
import { BasicForm, Caption, InputField } from "../../common";


export const SingIn: FC<ISingInProps> = ({
}) => {
    const { register, formState: { errors }, handleSubmit, reset, watch } = useForm({
        resolver: zodResolver(singInValidationSchema),
        mode: "onChange"
    })
    const { mutate: loginUser, isPending, isSuccess, status, error } = useLoginUser()  

    const onSubmit = handleSubmit(async (data) => {
        const { email, password } = data;
        loginUser({ email, password })
        if (isSuccess) {
            reset();
        }
    })
    return (
        <div className={`
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
                            gap-4`}
                    >
                        <InputField
                            key={"email"}
                            label="Email"
                            name="email"
                            hasError={!!(errors.email)}
                            register={register}
                            watch={watch}
                        />
                        <InputField
                            key={"password"}
                            label="Contraseña"
                            type="password"
                            name="password"
                            register={register}
                            hasError={!!(errors.password)}
                            watch={watch}
                        />
                        <div
                            className="w-full flex flex-row justify-center items-center gap-1"
                        >
                            <Caption text="Olvidaste tu contraseña?, registrate " key={"registrate"} />
                            <Link
                                href="/auth/register"
                                className=" flex flex-row justify-start items-center gap-1"
                            >
                                <Caption
                                    key={"aquí"}
                                    text="Aquí"
                                    isButton
                                    className="font-metropolisBold"
                                />
                            </Link>
                        </div>
                        <Link
                            href="/auth/forgot"
                            className="w-full flex flex-row justify-end items-center gap-1"
                        >
                            <Caption
                                key={"¿Olvidaste tu contraseña?"}
                                text="¿Olvidaste tu contraseña?"
                                isButton
                            />
                            <span className="text-light-primary dark:text-dark-primary text-lg text-center" > ⮕</span>
                        </Link>
                    </div>
                    <MainButton
                        text="Iniciar Sesion"
                        variant="background"
                        isLoading={isPending}
                    />
                </div>
            </BasicForm>
        </div>
    )
}