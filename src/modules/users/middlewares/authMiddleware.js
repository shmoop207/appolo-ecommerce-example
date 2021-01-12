"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.user = exports.AuthMiddleware = void 0;
const tslib_1 = require("tslib");
const route_1 = require("@appolo/route");
const inject_1 = require("@appolo/inject");
const usersManager_1 = require("../managers/usersManager");
const jwtService_1 = require("../managers/jwtService");
let AuthMiddleware = class AuthMiddleware extends route_1.StaticMiddleware {
    async run(req, res, next) {
        try {
            const decoded = this.jwtService.getTokenFromRequest(req);
            if (!decoded || !decoded.id) {
                return this._handleError();
            }
            let user = await this.usersManager.getById(decoded.id, { fields: "-password" });
            if (!user) {
                return this._handleError();
            }
            req.user = user;
            next();
        }
        catch (error) {
            this._handleError();
        }
    }
    _handleError() {
        throw new route_1.UnauthorizedError("Not authorized, token failed");
    }
};
tslib_1.__decorate([
    inject_1.inject(),
    tslib_1.__metadata("design:type", usersManager_1.UsersManager)
], AuthMiddleware.prototype, "usersManager", void 0);
tslib_1.__decorate([
    inject_1.inject(),
    tslib_1.__metadata("design:type", jwtService_1.JwtService)
], AuthMiddleware.prototype, "jwtService", void 0);
tslib_1.__decorate([
    inject_1.inject(),
    tslib_1.__metadata("design:type", Object)
], AuthMiddleware.prototype, "env", void 0);
AuthMiddleware = tslib_1.__decorate([
    inject_1.define(),
    inject_1.singleton()
], AuthMiddleware);
exports.AuthMiddleware = AuthMiddleware;
exports.user = route_1.customRouteParam((req) => req.user);
//# sourceMappingURL=authMiddleware.js.map