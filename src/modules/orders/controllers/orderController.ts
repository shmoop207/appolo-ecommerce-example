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


@controller("/api/orders")
@singleton()
export class OrderController extends StaticController {
    @inject() ordersManager: OrdersManager;

    @post("/")
    @statusCode(201)
    @middleware(AuthMiddleware)
    public async addOrderItems(@user user: User, @validateBody() body: OrderRouteModel) {
        let order = await this.ordersManager.create({...body, user: user._id});

        return order;
    }

    @get("/:id")
    @middleware(AuthMiddleware)
    public getOrderById(@param() id: string) {

        let order = this.ordersManager.getById(id, {populate: {path: "user", select: "name email"}})

        if (!order) {
            throw new NotFoundError("Order not found")
        }

        return order;
    }

    @put("/:id/pay")
    @middleware(AuthMiddleware)
    public async updateOrderToPaid(@param() id: string, @validateBody() body: PaymentResult) {
        let order = await this.ordersManager.getById(id);

        if (!order) {
            throw new NotFoundError("Order not found")
        }

        let dto = {
            isPaid: true,
            paidAt: new Date(),
            paymentResult: body
        }

        order = await this.ordersManager.updateByIdAndSave(id, dto)

        return order
    }

    @put("/:id/deliver")
    @middleware(AuthMiddleware,AdminMiddleware)
    public async updateOrderToDelivered(@param() id: string) {
        let order = await this.ordersManager.getById(id);

        if (!order) {
            throw new NotFoundError("Order not found")
        }

        let dto = {
            isDelivered: true,
            deliveredAt: new Date(),
        }

        order = await this.ordersManager.updateByIdAndSave(id, dto)

        return order
    }

    @get("/myorders")
    @middleware(AuthMiddleware)
    public async getMyOrders(@user user: User) {
        const orders = await this.ordersManager.findAll({filter: {user: user._id}});

        return orders
    }

    @get("/")
    @middleware(AuthMiddleware,AdminMiddleware)
    public async getOrders() {
        let orders = await this.ordersManager.getAll({populate: {path: "user", select: "id name"}})

        return orders.results
    }
}
