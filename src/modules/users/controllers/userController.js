"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const tslib_1 = require("tslib");
const route_1 = require("@appolo/route");
const inject_1 = require("@appolo/inject");
const usersManager_1 = require("../managers/usersManager");
const routeModels_1 = require("./models/routeModels");
const validator_1 = require("@appolo/validator");
const utils_1 = require("@appolo/utils");
const authMiddleware_1 = require("../middlewares/authMiddleware");
const jwtService_1 = require("../managers/jwtService");
const adminMiddleware_1 = require("../middlewares/adminMiddleware");
let UserController = class UserController extends route_1.StaticController {
    async updateUser(id, body) {
        let [e, user] = await utils_1.Promises.to(this.usersManager.updateByIdAndSave(id, body));
        if (e) {
            throw new route_1.BadRequestError(e.message);
        }
        return this.jwtService.createUserDto(user);
    }
    async getUserById(id) {
        const user = await this.usersManager.getById(id, { fields: "-password" });
        if (!user) {
            throw new route_1.NotFoundError("User not found");
        }
        return this.jwtService.createUserDto(user);
    }
    async getUsers() {
        const users = await this.usersManager.getAll({ fields: "-password" });
        return users.results.map(user => this.jwtService.createUserDto(user));
    }
    async deleteUser(id) {
        await this.usersManager.deleteById(id);
        return { message: "User removed" };
    }
};
tslib_1.__decorate([
    inject_1.inject(),
    tslib_1.__metadata("design:type", usersManager_1.UsersManager)
], UserController.prototype, "usersManager", void 0);
tslib_1.__decorate([
    inject_1.inject(),
    tslib_1.__metadata("design:type", jwtService_1.JwtService)
], UserController.prototype, "jwtService", void 0);
tslib_1.__decorate([
    route_1.put("/:id"),
    tslib_1.__param(0, route_1.param()), tslib_1.__param(1, validator_1.validateBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, routeModels_1.UpdateProfileModel]),
    tslib_1.__metadata("design:returntype", Promise)
], UserController.prototype, "updateUser", null);
tslib_1.__decorate([
    route_1.get("/:id"),
    tslib_1.__param(0, route_1.param()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], UserController.prototype, "getUserById", null);
tslib_1.__decorate([
    route_1.get("/"),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], UserController.prototype, "getUsers", null);
tslib_1.__decorate([
    route_1.del("/:id"),
    tslib_1.__param(0, route_1.param()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], UserController.prototype, "deleteUser", null);
UserController = tslib_1.__decorate([
    route_1.controller("/api/users"),
    inject_1.singleton(),
    route_1.middleware([authMiddleware_1.AuthMiddleware, adminMiddleware_1.AdminMiddleware])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=userController.js.map