"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderController = void 0;
const tslib_1 = require("tslib");
const route_1 = require("@appolo/route");
const inject_1 = require("@appolo/inject");
const ordersManager_1 = require("../managers/ordersManager");
const validator_1 = require("@appolo/validator");
const orderRouteModel_1 = require("./models/orderRouteModel");
const authMiddleware_1 = require("../../users/middlewares/authMiddleware");
const user_1 = require("../../users/models/user");
const paymentResult_1 = require("../models/paymentResult");
const adminMiddleware_1 = require("../../users/middlewares/adminMiddleware");
let OrderController = class OrderController extends route_1.StaticController {
    async addOrderItems(user, body) {
        let order = await this.ordersManager.create(Object.assign(Object.assign({}, body), { user: user._id }));
        return order;
    }
    getOrderById(id) {
        let order = this.ordersManager.getById(id, { populate: { path: "user", select: "name email" } });
        if (!order) {
            throw new route_1.NotFoundError("Order not found");
        }
        return order;
    }
    async updateOrderToPaid(id, body) {
        let order = await this.ordersManager.getById(id);
        if (!order) {
            throw new route_1.NotFoundError("Order not found");
        }
        let dto = {
            isPaid: true,
            paidAt: new Date(),
            paymentResult: body
        };
        order = await this.ordersManager.updateByIdAndSave(id, dto);
        return order;
    }
    async updateOrderToDelivered(id) {
        let order = await this.ordersManager.getById(id);
        if (!order) {
            throw new route_1.NotFoundError("Order not found");
        }
        let dto = {
            isDelivered: true,
            deliveredAt: new Date(),
        };
        order = await this.ordersManager.updateByIdAndSave(id, dto);
        return order;
    }
    async getMyOrders(user) {
        const orders = await this.ordersManager.findAll({ filter: { user: user._id } });
        return orders;
    }
    async getOrders() {
        let orders = await this.ordersManager.getAll({ populate: { path: "user", select: "id name" } });
        return orders.results;
    }
};
tslib_1.__decorate([
    inject_1.inject(),
    tslib_1.__metadata("design:type", ordersManager_1.OrdersManager)
], OrderController.prototype, "ordersManager", void 0);
tslib_1.__decorate([
    route_1.post("/"),
    route_1.statusCode(201),
    route_1.middleware(authMiddleware_1.AuthMiddleware),
    tslib_1.__param(0, authMiddleware_1.user), tslib_1.__param(1, validator_1.validateBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [user_1.User, orderRouteModel_1.OrderRouteModel]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderController.prototype, "addOrderItems", null);
tslib_1.__decorate([
    route_1.get("/:id"),
    route_1.middleware(authMiddleware_1.AuthMiddleware),
    tslib_1.__param(0, route_1.param()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", void 0)
], OrderController.prototype, "getOrderById", null);
tslib_1.__decorate([
    route_1.put("/:id/pay"),
    route_1.middleware(authMiddleware_1.AuthMiddleware),
    tslib_1.__param(0, route_1.param()), tslib_1.__param(1, validator_1.validateBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, paymentResult_1.PaymentResult]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderController.prototype, "updateOrderToPaid", null);
tslib_1.__decorate([
    route_1.put("/:id/deliver"),
    route_1.middleware(authMiddleware_1.AuthMiddleware, adminMiddleware_1.AdminMiddleware),
    tslib_1.__param(0, route_1.param()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderController.prototype, "updateOrderToDelivered", null);
tslib_1.__decorate([
    route_1.get("/myorders"),
    route_1.middleware(authMiddleware_1.AuthMiddleware),
    tslib_1.__param(0, authMiddleware_1.user),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [user_1.User]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderController.prototype, "getMyOrders", null);
tslib_1.__decorate([
    route_1.get("/"),
    route_1.middleware(authMiddleware_1.AuthMiddleware, adminMiddleware_1.AdminMiddleware),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], OrderController.prototype, "getOrders", null);
OrderController = tslib_1.__decorate([
    route_1.controller("/api/orders"),
    inject_1.singleton()
], OrderController);
exports.OrderController = OrderController;
//# sourceMappingURL=orderController.js.map