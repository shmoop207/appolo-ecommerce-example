import {define, singleton, inject} from "@appolo/inject"
import * as jwt from "jsonwebtoken";
import {NextFn, IResponse, UnauthorizedError, StaticMiddleware, IRequest, customRouteParam} from "@appolo/route";

import {IEnv} from "../../../../config/env/IEnv";
import {User} from "../models/user";

@define()
@singleton()
export class JwtService {

    @inject() env: IEnv

    public getTokenFromRequest(req: IRequest): { id: string } {
        try {

            if (!req.headers.authorization?.startsWith("Bearer")) {
                return null
            }

            let token = req.headers.authorization.split(" ")[1];

            const decoded = jwt.verify(token, this.env.jwtSecret) as { id: string };

            return decoded;

        } catch (e) {
            return null
        }
    }


    public sign(user: User) {
        return jwt.sign({id:user._id}, this.env.jwtSecret, {
            expiresIn: "30d",
        });
    };

    public  createUserDto(user: User) {
        return {
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin
        };
    }

    public  createUserDtoWithToken(user: User) {
        return {
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token:this.sign(user)
        };
    }

}
