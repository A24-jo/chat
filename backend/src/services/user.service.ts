import { UserEntity } from '../entities/user.entity';

type HashFunction = (password: string) => string;
type CompareFunction = (password: string, hashed: string) => boolean;
type UuidGenerator = () => string;

export class UserService {
    constructor(
        private readonly hashPassword: HashFunction,
        private readonly comparePassword: CompareFunction,
        private readonly uuidGenerator: UuidGenerator
    ) {}

    async register(user: UserRegisterDto): Promise<UserEntity | null> {
        try {
            let { email, name, password, phone } = user;

            const findUser = await UserEntity.findOneBy({ name, email });
            if (findUser) throw Error('User already exist');

            const userId = this.uuidGenerator();
            password = this.hashPassword(password);

            const userCreated = UserEntity.create({
                userId,
                email,
                name,
                phone,
                password,
            });
            return await userCreated.save();
        } catch (error) {
            console.log(error);
            return null;
        }
    }
}
