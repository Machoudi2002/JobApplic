
export const JobRouter = (app) => {
    app.route("/Jobs")
    .get(getJobs)
    .post(CreateNewJob)

    app.route("/Jobs/:id")
    .get(getJobDetails)
    .put(updateJobDetails)
    .delete(deleteJob)
}