import { jobInfo } from "../types"

const JobInfo = ( props : jobInfo ) => {
  return (
    <>
        <section className="container">
          <h1 className="font-extrabold italic text-5xl">
            {props.title}
          </h1>
          <p className="font-mainFont italic my-3">
            {props.description}
          </p>          
        </section>
    </>
  )
}

export default JobInfo