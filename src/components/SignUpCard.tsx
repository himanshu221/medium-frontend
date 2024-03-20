import { BottomWarning } from "./BottomWarning"
import { Button } from "./Button"
import { Heading } from "./Heading"
import { InputBox } from "./Input"
import { useNavigate } from "react-router-dom"
import { useRef } from "react"
import { SignupSchema } from "@himanshu212/medium-commons"
import axios, { AxiosResponse } from 'axios'
import toast, { Toaster } from "react-hot-toast"
import { backend_host } from "../config"

type messageType  = string | {
    issues : {
        code: string,
        message: string
    }[]
}
export const SignUpCard = () => {
    const navigate = useNavigate();
    const emailInput = useRef<HTMLInputElement>(null);
    const firstname = useRef<HTMLInputElement>(null);
    const lastname = useRef<HTMLInputElement>(null);
    const passwordInput = useRef<HTMLInputElement>(null);

    async function signUpHandler() {
        if (emailInput.current && passwordInput.current && firstname.current && lastname.current) {
            const body: SignupSchema = {
              username: emailInput.current.value,
              password: passwordInput.current.value,
              firstname: firstname.current.value,
              lastname: lastname.current.value
            };
            const promise = axios
              .post(`https://${backend_host}/api/v1/user/signup`, body, {
                headers: {
                  'Content-Type': 'application/json',
                },
              })
              .then((resp: AxiosResponse) => {
                localStorage.setItem('username', emailInput.current ? emailInput.current.value : '');
                localStorage.setItem('token', resp.data.token);
                navigate('/blog');
              });
      
            toast.promise(
              promise,
              {
                loading: 'Signing up user',
                error: err => {
                  const message : messageType = err.response.data.message
                  
                  if(typeof message === 'string')
                      return message
                  let acc: string = ""
                  message.issues.forEach(
                    (ele) => {
                      acc = acc.concat(ele.message, "\n")
                    }
                  )
                  return acc.substring(0,acc.length-2)
                }
                ,
                success: "Successfully Sign up",
              },
              {
                style: {
                  minWidth: '250px',
                  backgroundColor: '#18181b',
                  color: '#d4d4d8',
                },
              }
            );
          }
    }

    return <div className=" h-screen flex justify-center items-center">
        <div className="h-[540px] w-[360px] bg-neutral-950 rounded-lg shadow-slate-800 shadow-[0_0_10px_2px_rgb(148,163,184)] flex flex-col items-center p-4">
            <Heading label="Sign up" />
            <InputBox refer={firstname} type="text" placeholder={"Firstname"}/>
            <InputBox refer={lastname} type="text" placeholder={"Lastname"}/>
            <InputBox refer={emailInput} type="text" placeholder={"Email"}/>
            <InputBox refer={passwordInput} type="password" placeholder={"Password"}/>
            <Button onClickHandler={signUpHandler} label="Sign up"/>      
            <BottomWarning text="Already have an account?" link="Sign in" to="/signin"/>
            <Toaster />
        </div>
    </div>
}