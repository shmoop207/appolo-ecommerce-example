import {NextFn, IResponse, UnauthorizedError, StaticMiddleware, IRequest, customRouteParam} from "@appolo/route";
import {define, inject, singleton} from "@appolo/inject";
import * as jwt from "jsonwebtoken";
import {UsersManager} from "../managers/usersManager";
import {IEnv} from "../../../../config/env/IEnv";
import {User} from "../models/user";
import {JwtService} from "../managers/jwtService";

@define()
@singleton()
export class AuthMiddleware extends StaticMiddleware {

    @inject() usersManager: UsersManager;
    @inject() jwtService: JwtService;
    @inject() env: IEnv;

    public async run(req: IRequest, res: IResponse, next: NextFn) {

        try {

            const decoded = this.jwtService.getTokenFromRequest(req)

            if (!decoded || !decoded.id) {
                return this._handleError()
            }

            let user = await this.usersManager.getById((decoded as any).id, {fields: "-password"})

            if (!user) {
                return this._handleError()
            }

            (req as any).user = user

            next();
        } catch (error) {
            this._handleError()
        }
    }

    private _handleError() {
        throw new UnauthorizedError("Not authorized, token failed");
    }
}

export const user = customRouteParam((req: any) => req.user);


