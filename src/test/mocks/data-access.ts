import { Accessible } from "../../z-library/bases/accessible";
import { HydratedDocument, Model } from "mongoose";

const AVAILABLE_ID = '64c9e4f2df7cc072af2ac9e4'

export class DataAccess implements Accessible{

    public model: Model<any>

    constructor(model: Model<any>){
        this.model = model
    }

    //Implement the Accessible interface methods using jest.fn

}
