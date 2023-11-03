import { Router } from 'express';
import { UserController } from '../controllers/user.controller';
import { UserService } from '../services/user.service';
import { BcryptAdapter } from '../config/bcrypt';
import { UuidAdapter } from '../config/uuid';
import { JwtAdapter } from '../config/jwt';
import { check } from 'express-validator';
import { catchErrorsExValidator } from '../helpers/userHelpers';

export class UserRoutes {
    static get routes(): Router {
        const router = Router();

        // servicio
        const userService = new UserService(
            BcryptAdapter.hash,
            UuidAdapter.uuidGenerator,
            BcryptAdapter.compare,
            JwtAdapter.generateToken
        );

        // controlador
        const controller = new UserController(userService);

        router.post('/register', [
            check("name").exists().withMessage("Ingrese su nombre, es requerido"),
            check("phone").exists().withMessage("Ingrese su nombre, es requerido"),
            check("email").exists().isEmail().withMessage("Email invalido"),
            check("password").exists().withMessage("Invalid Password"),
        ],catchErrorsExValidator, controller.registerUser);

        router.post('/login', controller.loginUser);

        router.get('/get_all_users/:userId',controller.getAllUsers)

        return router;
    }
}
