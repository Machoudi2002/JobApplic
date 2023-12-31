import { addNewJob, CreateNewJobApp, editJobDetails, getJobById, getJobs, deleteJobById } from "../Controllers/JobsControllers"
import { RegisterAdmin, LoginAdmin } from "../Controllers/AdminControllers"

export const appRouter = (app) => {
    app.route("/LoginAdmin")
    .post(LoginAdmin)
    
    app.route("/RegisterAdmin")
    .post(RegisterAdmin)

    app.route("/jobs")
    .get(getJobs)
    .post(addNewJob)

    app.route("/jobs/:id")
    .get(getJobById)
    .put(CreateNewJobApp)
    .patch(editJobDetails)
    .delete(deleteJobById)
}
