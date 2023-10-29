import { Router } from "express";
import { UserRoutes } from "./user.routes";


export class AppRouter {
    
    static get routes(): Router{
        const router = Router()

        router.use('/api/v1/user', UserRoutes.routes)

        return router
    }
}