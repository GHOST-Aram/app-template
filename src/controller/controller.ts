import { DataAccess } from "../data-access/data-access";
import { GenericController } from "../z-library/bases/generic-controller";

export class Controller extends GenericController<DataAccess>{
    constructor (dataAccess: DataAccess){
        super(dataAccess)
    }

    //Feel free to override the base class methods here
}