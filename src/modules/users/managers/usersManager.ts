import {define, singleton} from "@appolo/inject"
import {model, BaseCrudManager, Doc} from "@appolo/mongo"
import {User, UserModel} from "../models/user";
import {LoginModel} from "../controllers/models/routeModels";

@define()
@singleton()
export class UsersManager extends BaseCrudManager<User> {

    @model(User) protected model: UserModel

    public async loginUser({email, password}: LoginModel): Promise<Doc<User>> {
        const user = await this.findOne({filter: {email}})

        if (!user) {
            return null
        }

        let isValid = await user.matchPassword(password);

        return isValid ? user : null;
    }

    public async registerUser(dto: Partial<User>): Promise<Doc<User>> {
        let user = await this.findOne({filter: {email: dto.email}});

        if (user) {
            throw new Error("User already Exist");
        }

        user = await this.create(dto);

        return user;


    }

}
