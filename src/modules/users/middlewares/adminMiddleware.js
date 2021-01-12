"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminMiddleware = void 0;
const tslib_1 = require("tslib");
const route_1 = require("@appolo/route");
const inject_1 = require("@appolo/inject");
const usersManager_1 = require("../managers/usersManager");
const user_1 = require("../models/user");
const authMiddleware_1 = require("./authMiddleware");
let AdminMiddleware = class AdminMiddleware extends route_1.StaticMiddleware {
    run(user) {
        if (!user || !user.isAdmin) {
            throw new route_1.UnauthorizedError("Not authorized as an admin");
        }
    }
};
tslib_1.__decorate([
    inject_1.inject(),
    tslib_1.__metadata("design:type", usersManager_1.UsersManager)
], AdminMiddleware.prototype, "usersManager", void 0);
tslib_1.__decorate([
    inject_1.inject(),
    tslib_1.__metadata("design:type", Object)
], AdminMiddleware.prototype, "env", void 0);
tslib_1.__decorate([
    tslib_1.__param(0, authMiddleware_1.user),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [user_1.User]),
    tslib_1.__metadata("design:returntype", void 0)
], AdminMiddleware.prototype, "run", null);
AdminMiddleware = tslib_1.__decorate([
    inject_1.define(),
    inject_1.singleton()
], AdminMiddleware);
exports.AdminMiddleware = AdminMiddleware;
//# sourceMappingURL=adminMiddleware.js.map