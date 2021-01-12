import {UnauthorizedError, StaticMiddleware,} from "@appolo/route";
import {define, inject, singleton} from "@appolo/inject";
import * as jwt from "jsonwebtoken";
import {UsersManager} from "../managers/usersManager";
import {IEnv} from "../../../../config/env/IEnv";
import {User} from "../models/user";
import {user} from "./authMiddleware";

@define()
@singleton()
export class AdminMiddleware extends StaticMiddleware {

    @inject() usersManager: UsersManager;
    @inject() env: IEnv;

    public run(@user user: User) {
        if (!user || !user.isAdmin) {
            throw new UnauthorizedError("Not authorized as an admin");

        }
    }
}



