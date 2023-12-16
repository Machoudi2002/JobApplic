

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
                }, 
                {
                    label: "Applications",
                    data: zData,
                    backgroundColor: "white",
                    borderColor: "#2563EB",
                    tension: 0.5,
                }
            ]
        }

        return data
    }

  return { getChartData };
}

export default useChartData