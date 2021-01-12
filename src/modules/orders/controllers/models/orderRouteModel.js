"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderRouteModel = void 0;
const tslib_1 = require("tslib");
const validator_1 = require("@appolo/validator");
const orderItem_1 = require("../../models/orderItem");
const shippingAddress_1 = require("../../models/shippingAddress");
class OrderRouteModel {
}
tslib_1.__decorate([
    validator_1.array().items(orderItem_1.OrderItem).min(1).required(),
    tslib_1.__metadata("design:type", Array)
], OrderRouteModel.prototype, "orderItems", void 0);
tslib_1.__decorate([
    validator_1.object().keys(shippingAddress_1.ShippingAddress).required(),
    tslib_1.__metadata("design:type", shippingAddress_1.ShippingAddress)
], OrderRouteModel.prototype, "shippingAddress", void 0);
tslib_1.__decorate([
    validator_1.string().required(),
    tslib_1.__metadata("design:type", String)
], OrderRouteModel.prototype, "paymentMethod", void 0);
tslib_1.__decorate([
    validator_1.number().required(),
    tslib_1.__metadata("design:type", Number)
], OrderRouteModel.prototype, "itemsPrice", void 0);
tslib_1.__decorate([
    validator_1.number().required(),
    tslib_1.__metadata("design:type", Number)
], OrderRouteModel.prototype, "taxPrice", void 0);
tslib_1.__decorate([
    validator_1.number().required(),
    tslib_1.__metadata("design:type", Number)
], OrderRouteModel.prototype, "shippingPrice", void 0);
tslib_1.__decorate([
    validator_1.number().required(),
    tslib_1.__metadata("design:type", Number)
], OrderRouteModel.prototype, "totalPrice", void 0);
exports.OrderRouteModel = OrderRouteModel;
//# sourceMappingURL=orderRouteModel.js.map