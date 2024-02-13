import { Router } from "express";
import { Controller } from "../controller/controller";
import { validator } from "../z-library/validation/validator";

const router = Router()

export const routesWrapper = (controller: Controller) =>{

    //Update with input validators and any changes from dependencies

    router.post('/:id', controller.respondWithMethodNotAllowed)
    router.post('/', 
        validator.handleValidationErrors,
        controller.addNew
    )

    router.get('/:id', 
        validator.validateReferenceId('id', { required: true }),
        validator.handleValidationErrors,
        controller.getOne
    )

    router.get('/', controller.getMany)

    router.put('/', controller.respondWithMethodNotAllowed)
    router.put('/:id', 
        validator.validateReferenceId('id', { required: true }),
        validator.handleValidationErrors,
        controller.updateOne
    )

    router.patch('/', controller.respondWithMethodNotAllowed)
    router.patch('/:id', 
        validator.validateReferenceId('id', { required: true }),
        validator.handleValidationErrors,
        controller.modifyOne
    )

    router.delete('/', controller.respondWithMethodNotAllowed)
    router.delete('/:id', 
        validator.validateReferenceId('id', { required: true }),
        validator.handleValidationErrors,
        controller.deleteOne
    )

    
    return router
}