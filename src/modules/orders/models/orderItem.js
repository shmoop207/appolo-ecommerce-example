"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderItem = void 0;
const tslib_1 = require("tslib");
const mongo_1 = require("@appolo/mongo");
const product_1 = require("../../product/models/product");
const validator_1 = require("@appolo/validator");
let OrderItem = class OrderItem extends mongo_1.Schema {
};
tslib_1.__decorate([
    mongo_1.prop({ type: String, required: true }),
    validator_1.string().required(),
    tslib_1.__metadata("design:type", String)
], OrderItem.prototype, "name", void 0);
tslib_1.__decorate([
    mongo_1.prop({ type: Number, required: true }),
    validator_1.number().required(),
    tslib_1.__metadata("design:type", Number)
], OrderItem.prototype, "qty", void 0);
tslib_1.__decorate([
    mongo_1.prop({ type: String, required: true }),
    validator_1.string().optional(),
    tslib_1.__metadata("design:type", String)
], OrderItem.prototype, "image", void 0);
tslib_1.__decorate([
    mongo_1.prop({ type: Number, required: true }),
    validator_1.number().required(),
    tslib_1.__metadata("design:type", Number)
], OrderItem.prototype, "price", void 0);
tslib_1.__decorate([
    mongo_1.propRef(product_1.Product, { required: true }),
    validator_1.string().required(),
    tslib_1.__metadata("design:type", Object)
], OrderItem.prototype, "product", void 0);
OrderItem = tslib_1.__decorate([
    mongo_1.schema('OrderItem', { timestamps: true })
], OrderItem);
exports.OrderItem = OrderItem;
//# sourceMappingURL=orderItem.js.map