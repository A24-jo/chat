import { Router } from "express";
import { UserRoutes } from "./user.routes";
import { MessageRoutes } from "./message.routes";
import { ContactsRoutes } from "./contacts.routes";


export class AppRouter {
    
    static get routes(): Router{
        const router = Router()

        router.use('/api/v1/user', UserRoutes.routes)
        router.use('/api/v1/message', MessageRoutes.routes)
        router.use('/api/v1/contacts', ContactsRoutes.routes)

        return router
    }
}