import { authFirebase } from "@/lib/firebase/firebase.config"
import { useMutation } from "@tanstack/react-query"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { useRouter } from "next/navigation";
import { IcreateUserParams } from "./types";

export const useCreateUser = () => {
    const router = useRouter();
    const mutation = useMutation({
        mutationKey: ["createUser"],
        mutationFn: ({ email, password, name }: IcreateUserParams) => {
            return createUserWithEmailAndPassword(authFirebase, email, password)
        },
        onSuccess: (data, variables) => {
            const { name } = variables
            updateProfile(data.user, {
                displayName: name
            })
            router.push("/auth/login")
        },
        onError(error, variables) {
            console.log("error", error)
        },

    })
    return mutation
}