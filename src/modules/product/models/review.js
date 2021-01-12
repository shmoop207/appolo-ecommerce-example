"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Review = void 0;
const tslib_1 = require("tslib");
const mongo_1 = require("@appolo/mongo");
const user_1 = require("../../users/models/user");
let Review = class Review extends mongo_1.Schema {
};
tslib_1.__decorate([
    mongo_1.prop({ type: String, required: true }),
    tslib_1.__metadata("design:type", String)
], Review.prototype, "name", void 0);
tslib_1.__decorate([
    mongo_1.prop({ type: Number, required: true }),
    tslib_1.__metadata("design:type", Number)
], Review.prototype, "rating", void 0);
tslib_1.__decorate([
    mongo_1.prop({ type: String, required: true }),
    tslib_1.__metadata("design:type", String)
], Review.prototype, "comment", void 0);
tslib_1.__decorate([
    mongo_1.propRef(user_1.User, { required: true }),
    tslib_1.__metadata("design:type", Object)
], Review.prototype, "user", void 0);
Review = tslib_1.__decorate([
    mongo_1.schema('Review', { timestamps: true })
], Review);
exports.Review = Review;
//# sourceMappingURL=review.js.map