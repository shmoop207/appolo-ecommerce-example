"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const tslib_1 = require("tslib");
const mongo_1 = require("@appolo/mongo");
const bcrypt = require("bcryptjs");
let User = class User extends mongo_1.Schema {
    async matchPassword(enteredPassword) {
        return await bcrypt.compare(enteredPassword, this.password);
    }
    async _preSave(next) {
        if (!this.isModified("password")) {
            next();
        }
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
    }
};
tslib_1.__decorate([
    mongo_1.prop({ type: String, required: true }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "name", void 0);
tslib_1.__decorate([
    mongo_1.prop({ type: String, required: true, unique: true }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "email", void 0);
tslib_1.__decorate([
    mongo_1.prop({ type: String, required: true }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "password", void 0);
tslib_1.__decorate([
    mongo_1.prop({ type: Boolean, required: true, default: false }),
    tslib_1.__metadata("design:type", Boolean)
], User.prototype, "isAdmin", void 0);
tslib_1.__decorate([
    mongo_1.method(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], User.prototype, "matchPassword", null);
tslib_1.__decorate([
    mongo_1.pre("save"),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], User.prototype, "_preSave", null);
User = tslib_1.__decorate([
    mongo_1.schema("User", { timestamps: true }),
    mongo_1.model()
], User);
exports.User = User;
//# sourceMappingURL=user.js.map