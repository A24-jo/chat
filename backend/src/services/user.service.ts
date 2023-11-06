import { Not } from 'typeorm';
import { UserEntity } from '../entities/user.entity';

type HashFunction = (password: string) => string;
type CompareFunction = (password: string, hashed: string) => boolean;
type UuidGenerator = () => string;
type SignToken = (payload: Object, duration?: string) => Promise<null | string>;

export class UserService {
    constructor(
        private readonly hashPassword: HashFunction,
        private readonly uuidGenerator: UuidGenerator,
        private readonly comparePassword: CompareFunction,
        private readonly generateToken: SignToken
    ) {}

    async register(user: UserRegisterDto): Promise<number> {
        try {
            let { email, name, password, phone } = user;
            console.log(email)
            console.log(name)
            console.log("hola regitster")
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
            return 1;
        } catch (error) {
            console.log(error);
            return 0;
        }
    }

    async login({ email, password, phone }: UserLoginDto): Promise<ReturnUserLoged> {
        try {
            const findUser = await UserEntity.findOne({
                where: [{ email }, { phone }],
            });
            if (!findUser) throw Error('User not found');
            
            const validatePassword = this.comparePassword(password,findUser.password);
            if (!validatePassword) throw Error('Invalid Email o Password');
            delete findUser.password
            
            const token = await this.generateToken({id: findUser.userId,name: findUser.name},'8h');
            if(!token) throw Error('Error generating token');

            return {
                user: findUser,
                token
            }

        } catch (error) {
            return {
                error: error.message
            }
        }
    }

    async getUsers(userId: string): Promise<UserEntity[]>{
        try {
            const users = await UserEntity.find({
                where:{
                    userId: Not(userId)
                },
                select: ['userId','active','avatar','createAt','email','id','phone','updatedAt','name']
            })
            return users
        } catch (error) {
            console.log(error)
            return []
        }
    }

    static async getUserByUserId(userId: string): Promise<UserEntity>{
        try {
            const user = await UserEntity.findOneBy({userId})
            return user
        } catch (error) {
            console.log(error)
            return null
        }
    }
}
