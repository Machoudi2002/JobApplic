import { Link } from "react-router-dom"
import useAuth from "../hooks/useAuth"

const NavBar = () => {
    const { isAuth, logout } = useAuth();
  return (
    <>
        <nav className="container py-5 font-extrabold flex align-center justify-center">
            <ul className="flex flex-row gap-5">
                <li>
                    <Link to="/">Jobs</Link>
                </li>
                {
                    isAuth ? (
                        <li>
                            <Link to="/Admin">Admin</Link>
                        </li>
                    ) : (
                        <li>
                            <Link to="/Login">Login</Link>
                        </li>
                    )
                }

                {
                    isAuth ? (
                        <button onClick={logout}>Logout</button>
                    ) : null
                }    
            </ul>
        </nav>
    </>
  )
}

export default NavBar