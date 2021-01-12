"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersManager = void 0;
const tslib_1 = require("tslib");
const inject_1 = require("@appolo/inject");
const mongo_1 = require("@appolo/mongo");
const order_1 = require("../models/order");
let OrdersManager = class OrdersManager extends mongo_1.BaseCrudManager {
};
tslib_1.__decorate([
    mongo_1.model(order_1.Order),
    tslib_1.__metadata("design:type", Object)
], OrdersManager.prototype, "model", void 0);
OrdersManager = tslib_1.__decorate([
    inject_1.define(),
    inject_1.singleton()
], OrdersManager);
exports.OrdersManager = OrdersManager;
//# sourceMappingURL=ordersManager.js.map