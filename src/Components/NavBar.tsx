import { Link } from "react-router-dom"

const LinkList = [
    {name: "Jobs", path: "/"},
    {name: "Admin", path: "/Admin"}
]

const NavBar = () => {
  return (
    <>
        <nav className="container py-5 font-extrabold flex align-center justify-center">
            <ul className="flex flex-row gap-5">
                {
                    LinkList.map((link, i) => (
                        <li key={i} >
                            <Link to={link.path}>{link.name}</Link>
                        </li>
                    ))

                }    
            </ul>
        </nav>
    </>
  )
}

export default NavBar