import { useNavigate } from "react-router-dom";
import { jobInfo } from "../types";

export const JobCard = (props: jobInfo) => {
  let navigate = useNavigate();

  return (
    <article
      className="bg-whiteBack p-4 mb-5 shadow rounded text-left cursor-pointer transition ease-in-out 0.5s hover:bg-textColor hover:text-whiteBack"
      onClick={() => navigate(`/jobs/${props.id}`)}
    >
      <h2 className="text-2xl font-extrabold italic">{props.title}</h2>
      <span className="text-sm font-bold italic text-gray">{props.date}</span>
      <p className="mt-1">{props.description}</p>
      
    </article>
  );
};
