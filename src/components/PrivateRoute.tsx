import { Navigate, Outlet } from "react-router-dom"
import { useAuthStatus } from "../hooks/useAuthStatus"
// import Spinner from "./Spinner"

export const PrivateRoute = () => {
    const { loggedIn, checkingStatus } = useAuthStatus()

    if (checkingStatus) {
        return <h1>Loading</h1>
    }

    return loggedIn ? <Outlet /> : <Navigate to='/login' />
}