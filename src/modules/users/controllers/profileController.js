"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileController = void 0;
const tslib_1 = require("tslib");
const route_1 = require("@appolo/route");
const inject_1 = require("@appolo/inject");
const usersManager_1 = require("../managers/usersManager");
const routeModels_1 = require("./models/routeModels");
const validator_1 = require("@appolo/validator");
const utils_1 = require("@appolo/utils");
const authMiddleware_1 = require("../middlewares/authMiddleware");
const jwtService_1 = require("../managers/jwtService");
let ProfileController = class ProfileController extends route_1.StaticController {
    async getUserProfile(user) {
        const userDto = await this.usersManager.getById(user._id);
        if (!userDto) {
            throw new route_1.UnauthorizedError("Invalid credentials");
        }
        return this.jwtService.createUserDto(userDto);
    }
    async updateUserProfile(user, body) {
        let [e, updatedUser] = await utils_1.Promises.to(this.usersManager.updateByIdAndSave(user._id, body));
        if (e) {
            throw new route_1.BadRequestError(e.message);
        }
        return this.jwtService.createUserDtoWithToken(updatedUser);
    }
};
tslib_1.__decorate([
    inject_1.inject(),
    tslib_1.__metadata("design:type", usersManager_1.UsersManager)
], ProfileController.prototype, "usersManager", void 0);
tslib_1.__decorate([
    inject_1.inject(),
    tslib_1.__metadata("design:type", jwtService_1.JwtService)
], ProfileController.prototype, "jwtService", void 0);
tslib_1.__decorate([
    route_1.get("/profile"),
    tslib_1.__param(0, authMiddleware_1.user),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProfileController.prototype, "getUserProfile", null);
tslib_1.__decorate([
    route_1.put("/profile"),
    tslib_1.__param(0, authMiddleware_1.user), tslib_1.__param(1, validator_1.validateBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, routeModels_1.UpdateProfileModel]),
    tslib_1.__metadata("design:returntype", Promise)
], ProfileController.prototype, "updateUserProfile", null);
ProfileController = tslib_1.__decorate([
    route_1.controller("/api/users"),
    inject_1.singleton(),
    route_1.middleware([authMiddleware_1.AuthMiddleware])
], ProfileController);
exports.ProfileController = ProfileController;
//# sourceMappingURL=profileController.js.map