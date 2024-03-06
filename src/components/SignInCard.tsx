import { BottomWarning } from "./BottomWarning"
import { Button } from "./Button"
import { Heading } from "./Heading"
import { InputBox } from "./Input"

export const SignInCard = () => {
    return <div className=" h-screen flex justify-center items-center">
        <div className="h-[400px] w-[360px] bg-neutral-950 rounded-lg shadow-slate-800 shadow-[0_0_10px_2px_rgb(148,163,184)] flex flex-col items-center p-4">
            <Heading label="Sign in" />
            <InputBox type="text" placeholder={"Email"}/>
            <InputBox type="password" placeholder={"Password"}/>
            <Button label="Sign in"/>      
            <BottomWarning text="Don't have an account?" link="Sign up" to="/signup"/>
        </div>
    </div>
}