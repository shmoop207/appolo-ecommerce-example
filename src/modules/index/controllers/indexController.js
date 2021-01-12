"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IndexController = void 0;
const tslib_1 = require("tslib");
const route_1 = require("@appolo/route");
const inject_1 = require("@appolo/inject");
const view_1 = require("@appolo/view");
const path = require("path");
let IndexController = class IndexController extends route_1.StaticController {
    async index() {
    }
};
tslib_1.__decorate([
    route_1.get("*"),
    view_1.view(path.join(__dirname, "../../../../client/build/index.html")),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], IndexController.prototype, "index", null);
IndexController = tslib_1.__decorate([
    route_1.controller(),
    inject_1.singleton()
], IndexController);
exports.IndexController = IndexController;
//# sourceMappingURL=indexController.js.map