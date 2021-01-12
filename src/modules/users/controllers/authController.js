"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const tslib_1 = require("tslib");
const route_1 = require("@appolo/route");
const inject_1 = require("@appolo/inject");
const usersManager_1 = require("../managers/usersManager");
const routeModels_1 = require("./models/routeModels");
const validator_1 = require("@appolo/validator");
const utils_1 = require("@appolo/utils");
const jwtService_1 = require("../managers/jwtService");
let AuthController = class AuthController extends route_1.StaticController {
    async login(body) {
        let user = await this.usersManager.loginUser(body);
        if (!user) {
            throw new route_1.UnauthorizedError("Invalid email and password");
        }
        return this.jwtService.createUserDtoWithToken(user);
    }
    async register(body) {
        let [e, user] = await utils_1.Promises.to(this.usersManager.registerUser(body));
        if (e) {
            throw new route_1.BadRequestError(e.message);
        }
        return this.jwtService.createUserDtoWithToken(user);
    }
};
tslib_1.__decorate([
    inject_1.inject(),
    tslib_1.__metadata("design:type", usersManager_1.UsersManager)
], AuthController.prototype, "usersManager", void 0);
tslib_1.__decorate([
    inject_1.inject(),
    tslib_1.__metadata("design:type", jwtService_1.JwtService)
], AuthController.prototype, "jwtService", void 0);
tslib_1.__decorate([
    route_1.post("/login"),
    tslib_1.__param(0, validator_1.validateBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [routeModels_1.LoginModel]),
    tslib_1.__metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
tslib_1.__decorate([
    route_1.post("/"),
    route_1.statusCode(201),
    tslib_1.__param(0, validator_1.validateBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [routeModels_1.RegisterUserModel]),
    tslib_1.__metadata("design:returntype", Promise)
], AuthController.prototype, "register", null);
AuthController = tslib_1.__decorate([
    route_1.controller("/api/users"),
    inject_1.singleton()
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=authController.js.map