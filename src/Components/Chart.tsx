import useChartData from "../hooks/useChartData"
import { Line } from "react-chartjs-2"
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement

} from "chart.js"

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
)

type chartData = {
    xData: string[],
    yData: number[],
    zData: number[],
}

const Chart = (props : chartData) => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];
    const years = Array.from({ length: 30 }, (_, i) => (i + 2023))
    const { getChartData } = useChartData();
    const options = {
        animation: {
            duration: 0,
        },
    };
  return (
    <div className="mb-2">
        <div className="p-3 bg-whiteBack flex flex-row justify-between align-center rounded shadow">
            <span className="text-left font-bold">Jobs Analytics ...</span>
            <div className="flex flex-row gap-3">
                <select className="text-right font-bold bg-whiteBack"
                    onChange={event => console.log(event.target.value)}
                >
                    {
                        months.map((month, i) => (
                            <option className="text-center font-bold" value={month} key={i}>{month}</option>
                        ))
                    }

                </select>
                <select className="text-right font-bold bg-whiteBack"
                    onChange={event => console.log(event.target.value)}
                >
                    {
                        years.map((year, i) => (
                            <option className="text-center font-bold" value={year} key={i}>{year}</option>
                        ))
                    }
                </select>
            </div>
        </div>
        <div className="p-5 bg-whiteBack my-2 rounded shadow">
            <Line data={getChartData(props.xData, props.yData, props.zData)} options={options}></Line>
        </div>
    </div>
  )
}

export default Chart