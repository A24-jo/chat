import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from 'typeorm';

@Entity('message')
export class MessageEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar')
    message: Text;

    @Column('varchar', { length: 50 })
    sender: string;

    @Column('varchar')
    receiver: string;

    @CreateDateColumn()
    createAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}