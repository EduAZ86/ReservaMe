import { SingIn, Title } from "@/ui"
import { AuthContainer, SocialSingUp } from "@/ui/components/auth/common"

function Login() {
    return (
        <div className="relative flex flex-col min-h-screen w-screen items-center justify-center">
            <AuthContainer>
                <Title
                    text="Iniciar Sesion"
                />
                <SingIn />
                <div className="row-span-2">
                    <SocialSingUp />
                </div>
            </AuthContainer>
        </div>)
}

export default Login