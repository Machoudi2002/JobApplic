import { useState } from "react"

const useSubmitMessage = () => {
    const [submitStatus, setSubmitStatus] = useState(false)
    const [submitMessage, setSubmitMessage] = useState("")

    const submitSuccess = (message : string, statu : boolean) => {
      setSubmitStatus(statu)
      setSubmitMessage(message)
    }
  return { submitSuccess, submitMessage, submitStatus }
}

export default useSubmitMessage