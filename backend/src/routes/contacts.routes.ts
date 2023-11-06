import { Router } from "express";
import { ContactsController } from "../controllers/contacts.controller";
import { ContactsService } from "../services/contacts.service";
import { UserService } from "../services/user.service";


export class ContactsRoutes {
    
    static get routes(): Router {
        const router = Router()

        const contactsService = new ContactsService()
        const getUserByUserId = UserService.getUserByUserId

        const contactsController = new ContactsController(contactsService,getUserByUserId)
        
        router.get("/get-all-contacts/:userId", contactsController.getAllContactsByUser)
        router.post("/create/:userId/:contactId", contactsController.postNewContact)


        return router
    }
}