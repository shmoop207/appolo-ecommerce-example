import {
    get,
    post,
    StaticController,
    controller,
    put,
    param,
    statusCode,
    BadRequestError,
    middleware, NotFoundError, del
} from "@appolo/route";
import {inject, singleton} from "@appolo/inject";
import {Doc} from "@appolo/mongo";
import {UsersManager} from "../managers/usersManager";
import {LoginModel, RegisterUserModel, UpdateProfileModel} from "./models/routeModels";
import {validate, validateBody} from "@appolo/validator";
import {User} from "../models/user";
import {Promises} from "@appolo/utils";
import {AuthMiddleware, user} from "../middlewares/authMiddleware";
import {AuthController} from "./authController";
import {JwtService} from "../managers/jwtService";
import {AdminMiddleware} from "../middlewares/adminMiddleware";

@controller("/api/users")
@singleton()
@middleware([AuthMiddleware,AdminMiddleware])
export class UserController extends StaticController {

    @inject() usersManager: UsersManager;
    @inject() jwtService: JwtService;


    @put("/:id")
    public async updateUser(@param() id: string, @validateBody() body: UpdateProfileModel) {

        let [e, user] = await Promises.to<Doc<User>, Error>(this.usersManager.updateByIdAndSave(id, body))

        if (e) {
            throw new BadRequestError(e.message)
        }

        return this.jwtService.createUserDto(user)
    }


    @get("/:id")
    public async getUserById(@param() id: string) {
        const user = await this.usersManager.getById(id, {fields: "-password"});

        if (!user) {
            throw new NotFoundError("User not found")
        }

        return this.jwtService.createUserDto(user)
    }

    @get("/")
    public async getUsers() {
        const users = await this.usersManager.getAll({fields: "-password"});

        return users.results.map(user => this.jwtService.createUserDto(user))
    }

    @del("/:id")
    public async deleteUser(@param() id: string) {
        await this.usersManager.deleteById(id);
        return {message: "User removed"};
    }
}

