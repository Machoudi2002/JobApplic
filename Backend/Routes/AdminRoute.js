
export const AdminRouter = (app) => {
    app.route("/admins")
    .get(getAdmins)
}