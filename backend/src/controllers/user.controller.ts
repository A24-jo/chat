import { Request, Response } from 'express';
import { UserService } from '../services/user.service';

type SignToken = (payload: Object, duration?: string) => Promise<null | string>;

export class UserController {
    constructor(
        private readonly userService: UserService,
        private readonly signToken: SignToken
    ) {}

    registerUser = async (req: Request, res: Response) => {
        console.log(req.body )

        const userCreated = await this.userService.register(req.body);
        if (userCreated == null)
            return res.status(400).json({ message: 'created error' });

        delete userCreated.password;

        const token = await this.signToken(
            { id: userCreated.userId, name: userCreated.name },
            '2h'
        );
        if (!token) return res.status(500).json({ message: 'error token' });

        return res.status(200).json({ user: userCreated, token });
    };
}
