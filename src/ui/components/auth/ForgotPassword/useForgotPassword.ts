import { authFirebase } from "@/lib/firebase/firebase.config";
import { useMutation } from "@tanstack/react-query";
import { sendPasswordResetEmail } from "firebase/auth";
import { useRouter } from "next/router";

export const useForgotPassword = () => {
    const router = useRouter();
    const mutation = useMutation({
        mutationKey: ["forgotPassword"],
        mutationFn: ({ email }: { email: string }) => {
            return sendPasswordResetEmail(authFirebase, email);
        },
        onSuccess: (data, variables) => {
            router.push("/auth/updatePassword");
        },
        onError(error, variables) {
            console.log("error", error);
        },
    });
    return mutation
}