import { JobObject } from "../types"

const useChartData = () => {

    const getChartData = (xData : string[], yData: number[], zData: number[]) => {
        const data = {
            labels: xData,
            datasets: [
                {
                    label: "Jobs",
                    data: yData,
                    backgroundColor: "black",
                    borderColor: "#DC2626",
                    tension: 0.5,
                    pointHoverRadius: 7,
                }, 
                {
                    label: "Applications",
                    data: zData,
                    backgroundColor: "white",
                    borderColor: "#2563EB",
                    tension: 0.5,
                    pointHoverRadius: 7,
                }
            ]
        }

        return data
    }

    const getDates = (apiData : []) => {
        return apiData?.filter((job: JobObject) => job.date).map((job: JobObject) => job.date?.slice(0, 2));
    }

    const dateChartData = (dateArr: string[]) => {
        return dateArr?.filter((value: string, index: number) => dateArr?.indexOf(value) === index);
    }

    const jobDataChart = (dataArr: string[]) => {
        const yData = dataArr?.reduce((count: { [key: string]: number }, item: string) => {
            count[item] = (count[item] || 0) + 1;
            return count;
          }, {});
    
        for (const key in yData) {
            yData[key] = yData[key] - 1;
            
        }
    
        return Object.values(yData);
    }


  return { getChartData, dateChartData, getDates, jobDataChart };
}

export default useChartData