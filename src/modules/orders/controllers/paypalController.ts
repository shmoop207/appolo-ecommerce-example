import {
    get,
    post,
    StaticController,
    controller,
    put,
    param,
    statusCode,
    BadRequestError,
    UnauthorizedError, NotFoundError, middleware
} from "@appolo/route";
import {inject, singleton} from "@appolo/inject";
import {OrdersManager} from "../managers/ordersManager";
import {validateBody} from "@appolo/validator";
import {OrderRouteModel} from "./models/orderRouteModel";
import {AuthMiddleware, user} from "../../users/middlewares/authMiddleware";
import {User} from "../../users/models/user";
import {PaymentResult} from "../models/paymentResult";
import {AdminMiddleware} from "../../users/middlewares/adminMiddleware";
import {IEnv} from "../../../../config/env/IEnv";


@controller("")
@singleton()
export class PaypalController extends StaticController {
    @inject() env: IEnv;


    @get("api/config/paypal")
    paypal() {
        return this.env.paypalClientId
    }
}
