import { SingUp, Title } from "@/ui"
import { AuthContainer, SocialSingUp } from "@/ui/components/auth/common"

function Register() {
    return (
        <div
            className="relative flex flex-col min-h-screen w-screen items-center justify-center"
        >
            <AuthContainer>
                <Title
                    text="Registrate"
                />
                <SingUp />
                <div className="row-span-2"> 
                    <SocialSingUp />
                </div>
            </AuthContainer>
        </div>
    )
}

export default Register