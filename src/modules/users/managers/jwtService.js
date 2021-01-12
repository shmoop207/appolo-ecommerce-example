"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtService = void 0;
const tslib_1 = require("tslib");
const inject_1 = require("@appolo/inject");
const jwt = require("jsonwebtoken");
let JwtService = class JwtService {
    getTokenFromRequest(req) {
        var _a;
        try {
            if (!((_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.startsWith("Bearer"))) {
                return null;
            }
            let token = req.headers.authorization.split(" ")[1];
            const decoded = jwt.verify(token, this.env.jwtSecret);
            return decoded;
        }
        catch (e) {
            return null;
        }
    }
    sign(user) {
        return jwt.sign({ id: user._id }, this.env.jwtSecret, {
            expiresIn: "30d",
        });
    }
    ;
    createUserDto(user) {
        return {
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin
        };
    }
    createUserDtoWithToken(user) {
        return {
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: this.sign(user)
        };
    }
};
tslib_1.__decorate([
    inject_1.inject(),
    tslib_1.__metadata("design:type", Object)
], JwtService.prototype, "env", void 0);
JwtService = tslib_1.__decorate([
    inject_1.define(),
    inject_1.singleton()
], JwtService);
exports.JwtService = JwtService;
//# sourceMappingURL=jwtService.js.map