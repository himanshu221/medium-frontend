import { Navigate, Route, Routes } from "react-router-dom"
import { AuthWrapper } from "./AuthWrapper"
import { Dashboard } from "../pages/Dashboard"
import { SignIn } from "../pages/SignIn"
import { SignUp } from "../pages/SignUp"

export const CustomRoutes = () => {
    return (
        <Routes>
            <Route element={<AuthWrapper />}>
                <Route path='/dashboard' element={<Dashboard />} />
            </Route>
            <Route path='/signin' element={localStorage.getItem('token') == null ? <SignIn /> : <Navigate to='/dashboard' />}></Route>
            <Route path='/signup' element={localStorage.getItem('token') == null ? <SignUp />: <Navigate to='/dashboard' />}></Route>
            <Route path='*' element={localStorage.getItem('token') == null ? <Navigate to='/signin' />: <Navigate to='/dashboard' />}></Route>
      </Routes>
    )
}