import { Link } from "react-router-dom"

const HomePage = () => {
  return (
    <>
        <section className="container text-center py-40">
            <h1 className="font-extrabold italic text-5xl">Welcome To Our Company</h1>
            <p className="font-mainFont italic my-3">Check the Available Jobs</p>
            <Link className="font-extrabold" to="/Jobs">View Jobs</Link>
        </section>
    </>
  )
}

export default HomePage