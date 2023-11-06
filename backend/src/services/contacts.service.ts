import { ContactsEntity } from "../entities/contacts.entity";
import { UserEntity } from "../entities/user.entity";


export class ContactsService {
    constructor() {}

    

    async getContactsByContactId(contactId: string, userId: number): Promise<ContactsEntity | number> {
        try {
            const contacts = await ContactsEntity.findOneBy({contactId,userId})
            return contacts
        } catch (error) {
            console.log(error)
            return 0
        }
    }

    async getContactsByUserId(userId: number): Promise<ContactsEntity[]> {
        try {
            const contacts = await ContactsEntity.findBy({userId})
            return contacts
        } catch (error) {
            console.log(error)
            return []
        }
    }

    async postContact(user: UserEntity, userIdContact: number): Promise<ContactsEntity | number> {
        // console.log(user)
        const { email,name,phone,userId} = user

        const dateCreated = new Date()

        try {
            const contact =  ContactsEntity.create({
                userId: userIdContact,
                contactId: userId,
                phone,
                name,
                email,
                avatar: user?.avatar ?? "",
                createAt: dateCreated,
                updatedAt: dateCreated,
            })
            
            return await contact.save()
        } catch (error) {
            console.log(error)
            return 0
        }
    }
}
