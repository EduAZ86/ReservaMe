import { ForgotPassword, SingUp, Title } from "@/ui"
import { AuthContainer, SocialSingUp } from "@/ui/components/auth/common"

export function Forgot() {
    return (
        <div
            className="relative flex flex-col min-h-screen w-screen items-center justify-center"
        >
            <AuthContainer>
                <Title
                    text="Recuperar contraseña"
                />
                <ForgotPassword />
                <div className="row-span-2">
                    
                </div>
            </AuthContainer>
        </div>
    )
}

export default Forgot