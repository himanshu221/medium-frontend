import { useRecoilState, useRecoilValue } from "recoil"
import { showDropDownAtom } from "../store/atoms/navbar"
import { useNavigate, Link, useLocation } from "react-router-dom"
import { contentAtom } from "../store/atoms/blog"


export const AppBar = () => {
    const content = useRecoilValue(contentAtom)
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
    }

    function createBlogHandler() {
        navigate('/blog/create')
    }

    function publishBlogHandler() {
        console.log(content)
    }

    return <nav className="fixed border-b border-slate-900 z-20 top-0 left-0 right-0 backdrop-blur-sm  flex justify-between py-3 px-16">
        <div className="flex justify-center flex-col">
            <Link to="/blog">
                <div className="font-bold bg-[#3178c6] bg-clip-text text-transparent text-4xl">
                    Medium
                </div>
            </Link>
        </div>
        <div className="flex relative justify-center">
            {!location.pathname.match('/blog/create') ?  <button onClick={createBlogHandler} className="bg-[#3178c6] mr-10 hover:bg-[#1d5ca0] text-white font-bold py-2 px-4 rounded-full">
                Write</button> : <button onClick={publishBlogHandler} className="bg-[#3178c6] mr-10 hover:bg-[#1d5ca0] text-white font-bold py-2 px-4 rounded-full">
                Publish</button>}
            <button type="button" onClick={onClickHandler} className="flex text-sm bg-neutral-900 rounded-full md:me-0" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                <div className="w-5 h-5 p-5 text-white text-lg flex justify-center items-center rounder-full">
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