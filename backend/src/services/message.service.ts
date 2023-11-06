import { MessageEntity } from '../entities/message.entity';

export class MessageService {
    constructor() {}

    async postMessage(newMessage: NewMessageDTO): Promise<number> {
        try {
            const { message, receiver, sender, type } = newMessage;

            const dateAt = new Date();

            const newMessageCreated = MessageEntity.create({
                message,
                receiver,
                sender,
                type,
                createAt: dateAt,
                updatedAt: dateAt,
            });
            await newMessageCreated.save();
            return 1;
        } catch (error) {
            console.log(error);
            return 0;
        }
    }
}
