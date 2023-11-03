import { Request, Response } from 'express';
import { UserService } from '../services/user.service';


export class UserController {
    constructor(
        private readonly userService: UserService,
    ) {}

    registerUser = async (req: Request, res: Response) => {
        console.log(req.body )

        const userCreated = await this.userService.register(req.body);
        if (userCreated)
            return res.status(400).json({ message: 'created error' });

        // delete userCreated.password;

        // const token = await this.signToken(
        //     { id: userCreated.userId, name: userCreated.name },
        //     '2h'
        // );
        // if (!token) return res.status(500).json({ message: 'error token' });

        return res.status(200).json({ message: "register" });
    };

    loginUser = async (req: Request, res: Response) => {
     console.log("first")
      const userLogin:Object = await this.userService.login(req.body);
      return res.status(200).json(userLogin);
    }
}

