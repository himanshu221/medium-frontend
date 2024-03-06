import { useSetRecoilState } from "recoil"
import { BottomWarning } from "./BottomWarning"
import { Button } from "./Button"
import { Heading } from "./Heading"
import { InputBox } from "./Input"
import { usernameAtom } from "../store/atoms/user"
import { useRef } from "react"
import axios, { AxiosResponse } from 'axios'
import { backend_host } from "../config"
import {SigninSchema} from "@himanshu212/medium-commons"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"

export const SignInCard = () => {
    const setUserName = useSetRecoilState(usernameAtom)
    const navigate = useNavigate()
    const emailInput = useRef<HTMLInputElement>(null)
    const passwordInput = useRef<HTMLInputElement>(null)


    async function signInHandler() {
        if(emailInput.current && passwordInput.current){
            const body : SigninSchema = {
                username: emailInput.current.value,
                password: passwordInput.current.value
            }
            const promise = axios.post(`https://${backend_host}/api/v1/user/signin`,body, {
                headers: {
                    "Content-Type": "application/json"
                }
            })
                .then((resp: AxiosResponse) => {
                    setUserName(emailInput.current ? emailInput.current.value : "")
                    localStorage.setItem('token', resp.data.token)
                    navigate('/dashboard')
                }).catch(() => {
                    alert('Invalid input')
                })

            toast.promise(promise,{
                loading: "Saving user",
                error: "Error occured",
                success: null
              },{
                style: {
                    minWidth: '250px',
                    boxShadow: '0 0 5px rgba(0,0,0,0.3)',
                    backgroundColor: 'rgb(10 10 10)',
                    zIndex: '100'
                },
                error: {
                  duration: 2000,
                },
              }
            )
        }
    }

    return <div className=" h-screen flex justify-center items-center">
        <div className="h-[400px] w-[360px] bg-neutral-950 rounded-lg shadow-slate-800 shadow-[0_0_10px_2px_rgb(148,163,184)] flex flex-col items-center p-4">
            <Heading label="Sign in" />
            <InputBox type="text" placeholder={"Email"} refer={emailInput} />
            <InputBox type="password" placeholder={"Password"} refer={passwordInput} />
            <Button label="Sign in" onClickHandler={signInHandler}/>      
            <BottomWarning text="Don't have an account?" link="Sign up" to="/signup"/>
        </div>
    </div>
}