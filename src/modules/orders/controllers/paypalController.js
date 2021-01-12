"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaypalController = void 0;
const tslib_1 = require("tslib");
const route_1 = require("@appolo/route");
const inject_1 = require("@appolo/inject");
let PaypalController = class PaypalController extends route_1.StaticController {
    paypal() {
        return this.env.paypalClientId;
    }
};
tslib_1.__decorate([
    inject_1.inject(),
    tslib_1.__metadata("design:type", Object)
], PaypalController.prototype, "env", void 0);
tslib_1.__decorate([
    route_1.get("api/config/paypal"),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], PaypalController.prototype, "paypal", null);
PaypalController = tslib_1.__decorate([
    route_1.controller(""),
    inject_1.singleton()
], PaypalController);
exports.PaypalController = PaypalController;
//# sourceMappingURL=paypalController.js.map