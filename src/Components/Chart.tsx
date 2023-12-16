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
    const { getChartData } = useChartData();
    const options = {}
  return (
    <div className="mb-2">
        <div className="p-3 bg-whiteBack flex flex-row justify-between align-center rounded shadow">
            <span className="text-left font-bold">Jobs Analytics ...</span>
            <div className="flex flex-row gap-3">
                <select className="text-right font-bold bg-whiteBack">
                    <option className="text-center font-bold" value="Dec">Oct</option>
                    <option className="text-center font-bold" value="Dec">Nov</option>
                    <option className="text-center font-bold" value="Dec">Dec</option>
                </select>
                <select className="text-right font-bold bg-whiteBack">
                    <option className="text-center font-bold" value="2023">2023</option>
                    <option className="text-center font-bold" value="2024">2024</option>
                    <option className="text-center font-bold" value="2025">2025</option>
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