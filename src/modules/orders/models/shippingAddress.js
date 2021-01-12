"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShippingAddress = void 0;
const tslib_1 = require("tslib");
const mongo_1 = require("@appolo/mongo");
const validator_1 = require("@appolo/validator");
let ShippingAddress = class ShippingAddress extends mongo_1.Schema {
};
tslib_1.__decorate([
    mongo_1.prop({ type: String, required: true }),
    validator_1.string().required(),
    tslib_1.__metadata("design:type", String)
], ShippingAddress.prototype, "address", void 0);
tslib_1.__decorate([
    mongo_1.prop({ type: String, required: true }),
    validator_1.string().required(),
    tslib_1.__metadata("design:type", String)
], ShippingAddress.prototype, "city", void 0);
tslib_1.__decorate([
    mongo_1.prop({ type: String, required: true }),
    validator_1.string().required(),
    tslib_1.__metadata("design:type", String)
], ShippingAddress.prototype, "postalCode", void 0);
tslib_1.__decorate([
    validator_1.string().required(),
    mongo_1.prop({ type: String, required: true }),
    tslib_1.__metadata("design:type", String)
], ShippingAddress.prototype, "country", void 0);
ShippingAddress = tslib_1.__decorate([
    mongo_1.schema('ShippingAddress', { timestamps: true })
], ShippingAddress);
exports.ShippingAddress = ShippingAddress;
//# sourceMappingURL=shippingAddress.js.map