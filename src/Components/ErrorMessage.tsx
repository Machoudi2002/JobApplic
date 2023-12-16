type message = {
    message: any
}

const ErrorMessage = (props : message) => {
  return (
    <p className='font-bold text-error text-left'>{props.message}</p>
  )
}

export default ErrorMessage