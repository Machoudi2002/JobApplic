import { addNewJob, CreateNewJobApp, getJobById, getJobs } from "../Controllers/JobsControllers"

export const appRouter = (app) => {
    app.route("/jobs")
    .get(getJobs)
    .post(addNewJob)

    app.route("/jobs/:id")
    .get(getJobById)
    .put(CreateNewJobApp)
}
