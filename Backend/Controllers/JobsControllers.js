import mongoose from "mongoose";
import { JobSchema } from "../Models/JobModel";


const Job = mongoose.model("JobApp", JobSchema);

/*=============================== Get Job =============================*/

export const getJobs = async (req, res) => {
    try {
        const Jobs = await Job.find({});
        res.json({ Jobs });
    } catch (err) {
        res.json({ success: false, error: err.message });
    }
};

export const addNewJob = async (req, res) => {
    const createdJob = new Job(req.body);
    try {
        await createdJob.save();
        res.json({createdJob});
    } catch (err) {
        res.json({
            success: false,
            message: err.message
        });
    }
};

/*=============================== Get Job By ID ============================= */

export const getJobById = async (req, res) => {
    try {
        const JobInfo = await Job.findById(req.params.id);
        if (JobInfo) {
            res.json({ JobInfo })
        } else {
            res.json({
                success: false,
                message: "Job Not Found"
            })
        }
    } catch (err) {
        res.json({ success: false, error: err.message });
    }
}

export const CreateNewJobApp = async (req, res) => {
    try {
        const updatedJob = await Job.findByIdAndUpdate(
            req.params.id,
            { $push: { applications: req.body } },
            { new: true }
        );

        if (updatedJob) {
            res.json({ updatedJob });
        } else {
            res.json({ success: false, message: 'Job not found' });
        }
    } catch (err) {
        res.json({ success: false, error: err.message });
    }
};


