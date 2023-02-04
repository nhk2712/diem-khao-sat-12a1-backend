require("dotenv").config();

const express = require("express");
const App = express();
const PORT = 8080;

const cors = require("cors");
App.use(cors({
    origin:process.env.FRONTEND_URL,
    methods:"GET"
}))

const AppRoute = require("./api/routes");
AppRoute(App);

App.listen(PORT,()=>{
    console.log(`App is running on port ${PORT}`);
})

module.exports = App;