import express, { Application } from "express"
import { routesWrapper } from "../../routes/urls"
import { Controller } from "../../controller/controller"
import { DataAccess } from "../mocks/data-access"
const app: Application = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Import Model from data-access/model 

const controller = new Controller(new DataAccess(Model))

app.use( '/rentals', routesWrapper(controller))

export { app }
