import { Router } from "express";
import { MessageController } from "../controllers/message.controller";
import { MessageService } from "../services/message.service";


export class MessageRoutes {
    

    static get routes(): Router {
        const router = Router()

        // el servicio de mensajes
        const messageService = new MessageService()

        // el controlador de mensajes
        const messageController = new MessageController(messageService)

        router.post('/create', messageController.createMessage)


        return router
    }
}