import express from "express";
import homeControllers from "../controlers/homeControlers"
let router = express.Router()

let initWebRouters = (app) => {
  router.get('/', homeControllers.getHomePage);
  
  return app.use("/", router);
}

module.exports = initWebRouters;