import { Navigate, Route, Routes } from "react-router-dom"
import { AuthWrapper } from "./AuthWrapper"
import { Dashboard } from "../pages/Dashboard"
import { SignIn } from "../pages/SignIn"
import { SignUp } from "../pages/SignUp"
import { Blog } from "../pages/Blog"
import { CreateBlog } from "../pages/CreateBlog"

export const CustomRoutes = () => {
    return (
        <Routes>
            <Route element={<AuthWrapper />}>
                <Route path='/blog' element={<Dashboard />} />
                <Route path='/blog/:id' element={<Blog />}></Route>
                <Route path='/blog/create' element={<CreateBlog />} />
            </Route>
            <Route path='/signin' element={localStorage.getItem('token') == null ? <SignIn /> : <Navigate to='/blog' />}></Route>
            <Route path='/signup' element={localStorage.getItem('token') == null ? <SignUp />: <Navigate to='/blog' />}></Route>
            <Route path='*' element={localStorage.getItem('token') == null ? <Navigate to='/signin' />: <Navigate to='/blog' />}></Route>
      </Routes>
    )
}