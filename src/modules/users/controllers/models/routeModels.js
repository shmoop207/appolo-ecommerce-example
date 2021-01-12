"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProfileModel = exports.UpdateUserModel = exports.RegisterUserModel = exports.LoginModel = void 0;
const tslib_1 = require("tslib");
const validator_1 = require("@appolo/validator");
class LoginModel {
}
tslib_1.__decorate([
    validator_1.string().email().required(),
    tslib_1.__metadata("design:type", String)
], LoginModel.prototype, "email", void 0);
tslib_1.__decorate([
    validator_1.string().required(),
    tslib_1.__metadata("design:type", String)
], LoginModel.prototype, "password", void 0);
exports.LoginModel = LoginModel;
class RegisterUserModel extends LoginModel {
}
tslib_1.__decorate([
    validator_1.string().required(),
    tslib_1.__metadata("design:type", String)
], RegisterUserModel.prototype, "name", void 0);
exports.RegisterUserModel = RegisterUserModel;
class UpdateUserModel extends LoginModel {
}
tslib_1.__decorate([
    validator_1.string().optional(),
    tslib_1.__metadata("design:type", String)
], UpdateUserModel.prototype, "name", void 0);
tslib_1.__decorate([
    validator_1.string().optional(),
    tslib_1.__metadata("design:type", String)
], UpdateUserModel.prototype, "email", void 0);
tslib_1.__decorate([
    validator_1.boolean().optional(),
    tslib_1.__metadata("design:type", Boolean)
], UpdateUserModel.prototype, "isAdmin", void 0);
exports.UpdateUserModel = UpdateUserModel;
class UpdateProfileModel extends LoginModel {
}
tslib_1.__decorate([
    validator_1.string().optional(),
    tslib_1.__metadata("design:type", String)
], UpdateProfileModel.prototype, "name", void 0);
tslib_1.__decorate([
    validator_1.string().optional(),
    tslib_1.__metadata("design:type", String)
], UpdateProfileModel.prototype, "email", void 0);
tslib_1.__decorate([
    validator_1.boolean().optional(),
    tslib_1.__metadata("design:type", String)
], UpdateProfileModel.prototype, "password", void 0);
exports.UpdateProfileModel = UpdateProfileModel;
//# sourceMappingURL=routeModels.js.map