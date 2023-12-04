type jobInformation = {
    jobTitle: String,
    jobDescription: String
}

const JobInfo = ( props : jobInformation ) => {
  return (
    <>
        <section className="container text-center pt-20 pb-10">
          <h1 className="font-extrabold italic text-5xl">
            {props.jobTitle}
          </h1>
          <p className="font-mainFont italic my-3">
            {props.jobDescription}
          </p>
        </section>
    </>
  )
}

export default JobInfo