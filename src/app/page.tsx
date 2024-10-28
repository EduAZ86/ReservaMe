import { ForgotPassword, InputField, SingIn, SingUp } from "./ui";

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen w-screen items-center justify-center">

      <div
        className="w-96 h-full flex flex-col gap-2 bg-light-background"
      >
        <SingIn

        />
        <SingUp/>
        <ForgotPassword/>
      </div>

    </div>
  );
}
