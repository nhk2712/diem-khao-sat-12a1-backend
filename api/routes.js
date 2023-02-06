const StudentModel = require("./StudentModel")

function AppRoute(app) {
    app.route("/")
        .get((req, res) => {
            res.send({ msg: "Hello world!" })
        })

    app.route("/query/:studentId/:dob")
        .get(async function (req, res) {
            res.send(await StudentModel(req.params.studentId, req.params.dob))
        })

    app.route("*")
        .get((req, res) => { res.send({ msg: "Not Found" }) })
}

module.exports = AppRoute;