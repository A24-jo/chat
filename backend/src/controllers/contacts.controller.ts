import { Request, Response } from 'express';
import { ContactsService } from '../services/contacts.service';
import { UserEntity } from '../entities/user.entity';

type GetUserByUserId = (userId: string) =>  Promise<UserEntity>;

export class ContactsController {
    constructor(
        private readonly contactsService: ContactsService,
        private readonly getUserByUserId: GetUserByUserId
    ) {}

    getAllContactsByUser = async (req: Request, res: Response) => {
        const { userId } = req.params;
        const contacts = await this.contactsService.getContactsByUserId(+userId);

        return res.status(200).json(contacts);
    };

    postNewContact = async (req: Request, res: Response) => {
        const { userId, contactId } = req.params;

        const contact = await this.contactsService.getContactsByContactId(contactId,+userId)
        if (typeof contact == 'number' )
            return res.status(500).json({ error: 'Ocurrio un error' });

        if(!!contact && 'contactId' in contact)
            return res.status(200).json({ error: `${contact.name} ya es un contacto tuyo` });

        const userContact = await this.getUserByUserId(contactId);

        const result = await this.contactsService.postContact(userContact,+userId);
        if (typeof result == 'number' )
            return res.status(500).json({ error: 'Error contact created' });

        return res.status(200).json(result);
    };
}
