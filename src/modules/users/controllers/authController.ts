import {
    get,
    post,
    StaticController,
    controller,
    put,
    param,
    statusCode,
    BadRequestError,
    UnauthorizedError, NotFoundError, del
} from "@appolo/route";
import {inject, singleton} from "@appolo/inject";
import {Doc} from "@appolo/mongo";
import {UsersManager} from "../managers/usersManager";
import {LoginModel, RegisterUserModel, UpdateProfileModel} from "./models/routeModels";
import {validate, validateBody} from "@appolo/validator";
import {User} from "../models/user";
import {Promises} from "@appolo/utils";
import {user} from "../middlewares/authMiddleware";
import {JwtService} from "../managers/jwtService";

@controller("/api/users")
@singleton()
export class AuthController extends StaticController {

    @inject() usersManager: UsersManager;
    @inject() jwtService: JwtService;

    @post("/login")
    public async login(@validateBody() body: LoginModel) {

        let user = await this.usersManager.loginUser(body);

        if (!user) {
            throw new UnauthorizedError("Invalid email and password");
        }

        return this.jwtService.createUserDtoWithToken(user)
    }

    @post("/")
    @statusCode(201)
    public async register(@validateBody() body: RegisterUserModel) {

        let [e, user] = await Promises.to<Doc<User>, Error>(this.usersManager.registerUser(body))

        if (e) {
            throw new BadRequestError(e.message)
        }

        return this.jwtService.createUserDtoWithToken(user)

    }


}

