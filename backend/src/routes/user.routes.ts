import { Router } from 'express';
import { UserController } from '../controllers/user.controller';
import { UserService } from '../services/user.service';
import { BcryptAdapter } from '../config/bcrypt';
import { UuidAdapter } from '../config/uuid';
import { JwtAdapter } from '../config/jwt';

export class UserRoutes {
    static get routes(): Router {
        const router = Router();

        // servicio
        const userService = new UserService(
            BcryptAdapter.hash,
            BcryptAdapter.compare,
            UuidAdapter.uuidGenerator
        );

        // controlador
        const controller = new UserController(userService, JwtAdapter.generateToken);

        router.post('/register', controller.registerUser);

        return router;
    }
}
