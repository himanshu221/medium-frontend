import { useRecoilState, useRecoilValue } from "recoil"
import { showDropDownAtom } from "../store/atoms/navbar"
import { useNavigate, Link, useLocation } from "react-router-dom"
import { blogTitleAtom, contentAtom } from "../store/atoms/blog"
import axios from 'axios'
import { backend_host } from "../config"
import { CreateBlogSchema} from "@himanshu212/medium-commons"
import toast from "react-hot-toast"

export const AppBar = () => {
    const content = useRecoilValue(contentAtom)
    const blogTile = useRecoilValue(blogTitleAtom)
    const userName = localStorage.getItem('username')
    const location = useLocation()
    const [showDropDown,setShowDropDown] = useRecoilState(showDropDownAtom)
    const navigate = useNavigate()

    function onClickHandler() {
        setShowDropDown(!showDropDown)
    }

    function signoutHandler() {
        localStorage.removeItem('token')
        localStorage.removeItem('username')
        setShowDropDown(false)
        navigate('/signin')
        navigate(0)
    }

    function createBlogHandler() {
        navigate('/blog/create')
    }

    function publishBlogHandler() {
        if(content.length==0 || blogTile.length==0){
            toast.error('Add title and/or blog content',{
                style: {
                  minWidth: '250px',
                  backgroundColor: '#18181b',
                  color: '#d4d4d8',
                },
              })
            return
        }
        const data: CreateBlogSchema = {
            title: blogTile,
            content: content
        }
        const promise = axios.post(`https://${backend_host}/api/v1/blog`,data,{
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }).then(() => {
            navigate('/blog')
            navigate(0)
        })

        toast.promise(
            promise,
            {
              loading: "Saving blog",
              error: "An error occured while saving blog!",
              success: "Successfully saved blog",
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

    return <nav className="fixed border-b border-slate-900 z-20 top-0 left-0 right-0 backdrop-blur-sm  flex justify-between py-3 px-16">
        <div className="flex justify-center flex-col">
            <Link to="/blog">
                <div className="font-bold bg-[#3178c6] bg-clip-text text-transparent text-xl md:text-4xl mr-5">
                    Medium
                </div>
            </Link>
        </div>
        <div className="flex relative justify-center">
            {!location.pathname.match('/blog/create') ?  <button onClick={createBlogHandler} className="bg-[#3178c6] mr-10 hover:bg-[#1d5ca0] text-white font-bold py-2 px-4 text-sm md:text-lg rounded-full">
                Write</button> : <button onClick={publishBlogHandler} className="bg-[#3178c6] mr-10 hover:bg-[#1d5ca0] text-white font-bold py-2 px-4 rounded-full">
                Publish</button>}
            <button type="button" onClick={onClickHandler} className="flex text-sm bg-neutral-900 rounded-full md:me-0" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                <div className="w-5 h-5 p-5 text-white md:text-lg text-sm flex justify-center items-center rounder-full">
                    {userName ? userName.toUpperCase().charAt(0) : "U"}
                </div>
            </button>
            {showDropDown ?
                <div className="z-50 absolute top-10 right-1 my-4 text-base list-none divide-y rounded-lg shadow bg-neutral-900 divide-gray-600" id="user-dropdown">
                    <div className="px-4 py-3">
                        <span className="block text-sm truncate text-gray-400">{userName}</span>
                    </div>
                    <ul className="py-2" aria-labelledby="user-menu-button" onClick={signoutHandler}>
                        <li>
                            <a href="#" className="block px-4 py-2 text-sm   hover:bg-gray-600 text-gray-200 hover:text-white">Sign out</a>
                        </li>
                    </ul>
                </div>
            : null }
        </div>
    </nav>
}