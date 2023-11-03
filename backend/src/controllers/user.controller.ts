import { Request, Response } from 'express';
import { UserService } from '../services/user.service';

export class UserController {
    constructor(private readonly userService: UserService) {}

    registerUser = async (req: Request, res: Response) => {
        const userCreated = await this.userService.register(req.body);
        if (!userCreated)
            return res.status(400).json({ message: 'created error' });

        return res.status(200).json({ message: 'register' });
    };

    loginUser = async (req: Request, res: Response) => {
        const userLogin = await this.userService.login(req.body);
        if (userLogin.error) {
            return res.status(200).json({ error: userLogin.error });
        }

        return res.status(200).json(userLogin);
    };

    getAllUsers = async (req: Request, res: Response) => {
        // ! deveria traer el userid del token
        const users = await this.userService.getUsers(req.params.userId);
        return res.status(200).json(users)
    };
}
