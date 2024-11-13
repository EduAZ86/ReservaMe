import { authFirebase } from "@/lib/firebase/firebase.config";
import { useMutation } from "@tanstack/react-query";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";

export const useLoginUser = () => {
    const router = useRouter();
    const mutation = useMutation({
        mutationKey: ["loginUser"],
        mutationFn: ({ email, password }: { email: string; password: string }) => {
            return signInWithEmailAndPassword(authFirebase, email, password);
        },
        onSuccess: (data, variables) => {
            router.push("/");
        },
        onError(error, variables) {
            console.log("error", error);
        },
    })
    return mutation
}
