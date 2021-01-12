"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const tslib_1 = require("tslib");
const mongo_1 = require("@appolo/mongo");
const user_1 = require("../../users/models/user");
const orderItem_1 = require("./orderItem");
const shippingAddress_1 = require("./shippingAddress");
const paymentResult_1 = require("./paymentResult");
const validator_1 = require("@appolo/validator");
let Order = class Order extends mongo_1.Schema {
};
tslib_1.__decorate([
    mongo_1.propRef(user_1.User, { required: true }),
    tslib_1.__metadata("design:type", Object)
], Order.prototype, "user", void 0);
tslib_1.__decorate([
    mongo_1.prop([orderItem_1.OrderItem]),
    tslib_1.__metadata("design:type", Array)
], Order.prototype, "orderItems", void 0);
tslib_1.__decorate([
    mongo_1.prop(shippingAddress_1.ShippingAddress),
    validator_1.object().keys(shippingAddress_1.ShippingAddress),
    tslib_1.__metadata("design:type", shippingAddress_1.ShippingAddress)
], Order.prototype, "shippingAddress", void 0);
tslib_1.__decorate([
    mongo_1.prop({ type: String, required: true }),
    validator_1.string(),
    tslib_1.__metadata("design:type", String)
], Order.prototype, "paymentMethod", void 0);
tslib_1.__decorate([
    mongo_1.prop(paymentResult_1.PaymentResult),
    tslib_1.__metadata("design:type", paymentResult_1.PaymentResult)
], Order.prototype, "paymentResult", void 0);
tslib_1.__decorate([
    mongo_1.prop({ type: Number, required: true, default: 0.0 }),
    tslib_1.__metadata("design:type", Number)
], Order.prototype, "taxPrice", void 0);
tslib_1.__decorate([
    mongo_1.prop({ type: Number, required: true, default: 0.0 }),
    tslib_1.__metadata("design:type", Number)
], Order.prototype, "shippingPrice", void 0);
tslib_1.__decorate([
    mongo_1.prop({ type: Number, required: true, default: 0.0 }),
    tslib_1.__metadata("design:type", Number)
], Order.prototype, "totalPrice", void 0);
tslib_1.__decorate([
    mongo_1.prop({ type: Boolean, required: true, default: false }),
    tslib_1.__metadata("design:type", Boolean)
], Order.prototype, "isPaid", void 0);
tslib_1.__decorate([
    mongo_1.prop({ type: Date }),
    tslib_1.__metadata("design:type", Date)
], Order.prototype, "paidAt", void 0);
tslib_1.__decorate([
    mongo_1.prop({ type: Boolean, required: true, default: false }),
    tslib_1.__metadata("design:type", Boolean)
], Order.prototype, "isDelivered", void 0);
tslib_1.__decorate([
    mongo_1.prop({ type: Date, }),
    tslib_1.__metadata("design:type", Date)
], Order.prototype, "deliveredAt", void 0);
Order = tslib_1.__decorate([
    mongo_1.schema("Order", { timestamps: true }),
    mongo_1.model()
], Order);
exports.Order = Order;
//# sourceMappingURL=order.js.map