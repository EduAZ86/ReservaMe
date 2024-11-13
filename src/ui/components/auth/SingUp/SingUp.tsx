"use client";
import { FC } from "react";
import Link from "next/link";
import { ISingUpProps } from "./types";
import { useForm } from "react-hook-form";
import { DisplayErrors, singUpValidationSchema } from "../common";
import { useCreateUser } from "./useCreateUser";
import { MainButton } from "../../common/buttons";
import { zodResolver } from "@hookform/resolvers/zod";
import { BasicForm, Caption, InputField } from "../../common";




export const SingUp: FC<ISingUpProps> = () => {

    const { register, formState: { errors }, handleSubmit, reset, watch, } = useForm({
        resolver: zodResolver(singUpValidationSchema),
        mode: "onChange"
    })

    const { mutate: createUser, isPending, isSuccess, status } = useCreateUser()

    const onSubmit = handleSubmit(async (data) => {
        const { name, email, password } = data;
        createUser({ email, password, name })
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
                            key={"name"}
                            label="Nombre"
                            name="name"
                            hasError={!!(errors.name)}
                            register={register}
                            watch={watch}
                        />
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
                        <InputField
                            key={"confirm"}
                            label="Confirmar contraseña"
                            type="password"
                            name="confirm"
                            register={register}
                            hasError={!!(errors.confirm)}
                            watch={watch}
                        />
                        <DisplayErrors
                            errors={errors}
                        />
                        <Link
                            href="/auth/login"
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
                        isLoading={isPending}
                    />
                </div>
            </BasicForm>
        </div>


    )
}