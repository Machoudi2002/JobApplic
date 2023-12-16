type CounterProps = {
    total: number,
    kind: string
}

const Counter = (props : CounterProps) => {
  return (
    <div className="font-bold bg-whiteBack w-full py-3 mb-2 py-3 px-5 rounded shadow text-left flex flex-row gap-3">
        <span className="text-7xl italic">{props.total}</span>
        <div className="flex flex-col mt-2">
            <span className="text-3xl italic">{props.kind} </span>
            <span>in Total</span>
        </div>
    </div>
  )
}

export default Counter