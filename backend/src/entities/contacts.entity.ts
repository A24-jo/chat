import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';
import { UserEntity } from './user.entity';

@Entity('contacts')
export class ContactsEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar')
    contactId: string;

    @Column('varchar', { length: 50 })
    name: string;

    @Column('varchar', {nullable: true})
    avatar: string;

    @Column('varchar', { length: 50 })
    phone: string;

    @Column('varchar', { length: 50 })
    email: string;

    @Column('boolean', { default: false })
    active: boolean;

    @CreateDateColumn()
    createAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @Column('varchar')
    userId: number;

    @ManyToOne(() => UserEntity, user => user.contacts)
    user: UserEntity
}
