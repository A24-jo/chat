import { Request, Response } from 'express';
import { MessageService } from '../services/message.service';

export class MessageController {
    constructor(private readonly messageService: MessageService) {}

    createMessage = async (req: Request, res: Response) => {
        const message = await this.messageService.postMessage(req.body)
        if (!message) return res.status(500).json({error:"Create message error"});

        return res.status(200)
    };
}
