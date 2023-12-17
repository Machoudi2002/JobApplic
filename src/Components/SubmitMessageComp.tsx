type SubmitMessageCompProps = {
    message: string
}

const SubmitMessageComp = (props : SubmitMessageCompProps) => {
  return (
    <div className="conatiner my-16 mx-3 p-4 bg-whiteBack rounded shadow sm:mx-40 md:mx-48 lg:mx- xl:mx-80">
        <h2 className="text-center font-extrabold italic text-4xl m-8">{props.message}</h2>
    </div>
  )
}

export default SubmitMessageComp