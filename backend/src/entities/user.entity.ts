import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    BaseEntity,
} from 'typeorm';

@Entity('user')
export class UserEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar')
    userId: string;

    @Column('varchar', { length: 50 })
    name: string;

    @Column('varchar', {nullable: true})
    avatar: string;

    @Column('varchar', { length: 50 })
    phone: string;

    @Column('varchar', { length: 50 })
    email: string;

    @Column('varchar')
    password: string;

    @Column('boolean', { default: true })
    active: boolean;

    @CreateDateColumn()
    createAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
