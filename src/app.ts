import { app } from "./config/config";
import { routesWrapper } from "./routes/urls";
import { Controller } from "./controller/controller";
import { DataAccess } from "./data-access/data-access";
import { httpErrors } from "./z-library/HTTP/http-errors";


const dataAccess = new DataAccess(Model) //Create model and import from data-access
const controller = new Controller(dataAccess)

const routes = routesWrapper(controller)

app.use('/rentals', routes)

app.use(httpErrors.handleUnknownUrls)
app.use(httpErrors.handleServerErrors)