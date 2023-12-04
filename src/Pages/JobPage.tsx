import JobInfo from "../Components/JobInfo"
import JobForm from "../Components/JobForm"

const JobPage = () => {
  return (
    <>
        <JobInfo 
            jobTitle="Senior Javascript Developer"
            jobDescription="We're excited that you're considering Our Company as the next 
            step in your professional development."
        />
        <JobForm />
    </>
  )
}

export default JobPage