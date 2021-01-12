"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentResult = void 0;
const tslib_1 = require("tslib");
const mongo_1 = require("@appolo/mongo");
const validator_1 = require("@appolo/validator");
let PaymentResult = class PaymentResult extends mongo_1.Schema {
};
tslib_1.__decorate([
    mongo_1.prop({ type: String }),
    validator_1.string().required(),
    tslib_1.__metadata("design:type", String)
], PaymentResult.prototype, "id", void 0);
tslib_1.__decorate([
    mongo_1.prop({ type: String }),
    validator_1.string().required(),
    tslib_1.__metadata("design:type", String)
], PaymentResult.prototype, "status", void 0);
tslib_1.__decorate([
    mongo_1.prop({ type: String }),
    validator_1.string().required(),
    tslib_1.__metadata("design:type", String)
], PaymentResult.prototype, "update_time", void 0);
tslib_1.__decorate([
    mongo_1.prop({ type: String }),
    validator_1.string().required(),
    tslib_1.__metadata("design:type", String)
], PaymentResult.prototype, "email_address", void 0);
PaymentResult = tslib_1.__decorate([
    mongo_1.schema('PaymentResult', { timestamps: true })
], PaymentResult);
exports.PaymentResult = PaymentResult;
//# sourceMappingURL=paymentResult.js.map