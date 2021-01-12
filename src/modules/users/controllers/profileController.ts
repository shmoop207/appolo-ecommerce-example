import {
    get,
    post,
    StaticController,
    controller,
    put,
    param,
    statusCode,
    BadRequestError,
    UnauthorizedError, middleware, del
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
@middleware([AuthMiddleware])
export class ProfileController extends StaticController {

    @inject() usersManager: UsersManager;
    @inject() jwtService: JwtService;


    @get("/profile")
    public async getUserProfile(@user user: Doc<User>) {

        const userDto = await this.usersManager.getById(user._id);

        if (!userDto) {
            throw new UnauthorizedError("Invalid credentials");

        }

        return this.jwtService.createUserDto(userDto)
    }

    @put("/profile")
    public async updateUserProfile(@user user: Doc<User>, @validateBody() body: UpdateProfileModel) {

        let [e, updatedUser] = await Promises.to<Doc<User>, Error>(this.usersManager.updateByIdAndSave(user._id, body))

        if (e) {
            throw new BadRequestError(e.message)
        }

        return this.jwtService.createUserDtoWithToken(updatedUser)


    }

}

