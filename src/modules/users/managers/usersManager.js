"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersManager = void 0;
const tslib_1 = require("tslib");
const inject_1 = require("@appolo/inject");
const mongo_1 = require("@appolo/mongo");
const user_1 = require("../models/user");
let UsersManager = class UsersManager extends mongo_1.BaseCrudManager {
    async loginUser({ email, password }) {
        const user = await this.findOne({ filter: { email } });
        if (!user) {
            return null;
        }
        let isValid = await user.matchPassword(password);
        return isValid ? user : null;
    }
    async registerUser(dto) {
        let user = await this.findOne({ filter: { email: dto.email } });
        if (user) {
            throw new Error("User already Exist");
        }
        user = await this.create(dto);
        return user;
    }
};
tslib_1.__decorate([
    mongo_1.model(user_1.User),
    tslib_1.__metadata("design:type", Object)
], UsersManager.prototype, "model", void 0);
UsersManager = tslib_1.__decorate([
    inject_1.define(),
    inject_1.singleton()
], UsersManager);
exports.UsersManager = UsersManager;
//# sourceMappingURL=usersManager.js.map