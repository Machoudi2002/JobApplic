import { jobApp } from "../types"

const ApplicationCard = (props : jobApp) => {
  return (
    <div className="bg-whiteBack w-full mb-2 p-4 rounded shadow text-left">
        <p><span className="font-bold">Full Name : </span>{props.fullname}</p>
        <p><span className="font-bold">Email : </span>{props.email}</p>
        <p><span className="font-bold">Phone : </span>{props.phoneNumber}</p>
        <p>
            <span className="font-bold">Linkedin URL : </span>
            <a className="underline" href={props.linkedinURL} target="_blank">{props.linkedinURL}</a>
        </p>
        { 
            props.portfolioURL && 
            <p><span className="font-bold">Portfolio URL : </span>
            <a className="underline" href={props.portfolioURL} target="_blank">{props.portfolioURL}</a></p>
        }
        <p><span className="font-bold">Experience : </span>+{props.experience}</p>
    </div>
  )
}

export default ApplicationCard