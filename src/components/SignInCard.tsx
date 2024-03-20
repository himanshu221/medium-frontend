import { BottomWarning } from "./BottomWarning"
import { Button } from "./Button"
import { Heading } from "./Heading"
import { InputBox } from "./Input"
import { useRef } from "react"
import axios, { AxiosResponse } from 'axios'
import { backend_host } from "../config"
import {SigninSchema} from "@himanshu212/medium-commons"
import toast, { Toaster } from "react-hot-toast"
import { useNavigate } from "react-router-dom"

type messageType  = string | {
    issues : {
        code: string,
        message: string
    }[]
}

export const SignInCard = () => {
  const navigate = useNavigate();
  const emailInput = useRef<HTMLInputElement>(null);
  const passwordInput = useRef<HTMLInputElement>(null);

  async function signInHandler() {
    if (emailInput.current && passwordInput.current) {
      const body: SigninSchema = {
        username: emailInput.current.value,
        password: passwordInput.current.value,
      };
      const promise = axios
        .post(`https://${backend_host}/api/v1/user/signin`, body, {
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
          loading: 'Signing in user',
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
          success: "Successfully Sign in",
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

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="h-[400px] w-[360px] bg-neutral-950 rounded-lg shadow-slate-800 shadow-[0_0_10px_2px_rgb(148,163,184)] flex flex-col items-center p-4">
        <Heading label="Sign in" />
        <InputBox type="text" placeholder={'Email'} refer={emailInput} />
        <InputBox
          type="password"
          placeholder={'Password'}
          refer={passwordInput}
        />
        <Button label="Sign in" onClickHandler={signInHandler} />
        <BottomWarning
          text="Don't have an account?"
          link="Sign up"
          to="/signup"
        />
        <Toaster />
      </div>
    </div>
  );
};
