import { Navigate, Outlet } from "react-router-dom"

export const AuthWrapper = () => {
    return (
        localStorage.getItem('token') != null ? <Outlet />  : <Navigate to='/signin'></Navigate>
    )
}