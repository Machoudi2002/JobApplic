import axios from "axios"
import { useState } from "react";

const useFetchApi = () => {
    const [apiData, setApiData] = useState<any>([]);

    const postNewJob = async (URL: string, postData: object) => {

        try {
            await axios.post(URL, postData);
            console.log(postData);
        } catch (error) {
            console.error('Error:', error);
        }
    }

    const getJobs = async (URL: string) => {

        try {
            const response = await axios.get(URL);
            setApiData(response.data.Jobs);
        } catch (error) {
            console.error('Error:', error);
        }
    }
    
    const getJobById = async (URL: string) => {

        try {
            const response = await axios.get(URL);
            setApiData(response.data.JobInfo);
        } catch (error) {
            console.error('Error:', error);
        }
    }

    const postJobApp = async (URL: string, postData: object) => {

        try {
            await axios.put(URL, postData);
            console.log(postData);
        } catch (error) {
            console.error('Error:', error);
        }
    }


    return { apiData, getJobs, getJobById, postJobApp, postNewJob };
}

export default useFetchApi