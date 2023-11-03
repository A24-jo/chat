import { UserEntity } from '../entities/user.entity';

type HashFunction = (password: string) => string;
type CompareFunction = (password: string, hashed: string) => boolean;
type UuidGenerator = () => string;
type SignToken = (payload: Object, duration?: string) => Promise<null | string>;

export class UserService {
    constructor(
        private readonly hashPassword: HashFunction,
        private readonly comparePassword: CompareFunction,
        private readonly uuidGenerator: UuidGenerator,
        private readonly generateToken:SignToken
    ) { }

    async register(user: UserRegisterDto): Promise<number> {
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
            
            await userCreated.save();
            return 1
        } catch (error) {
            console.log(error);
            return 0;
        }
    }

    async login(user: UserRegisterDto) {
        try {
           

        } catch (error) {
            console.log(error);
            return null;
        }
    }
}
