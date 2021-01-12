"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const tslib_1 = require("tslib");
const mongo_1 = require("@appolo/mongo");
const user_1 = require("../../users/models/user");
const review_1 = require("./review");
const validator_1 = require("@appolo/validator");
let Product = class Product extends mongo_1.Schema {
};
tslib_1.__decorate([
    mongo_1.propRef(user_1.User, { required: true }),
    tslib_1.__metadata("design:type", Object)
], Product.prototype, "user", void 0);
tslib_1.__decorate([
    mongo_1.prop({ type: String, required: true }),
    validator_1.string().required(),
    tslib_1.__metadata("design:type", String)
], Product.prototype, "name", void 0);
tslib_1.__decorate([
    mongo_1.prop({ type: String, required: true }),
    validator_1.string().optional(),
    tslib_1.__metadata("design:type", String)
], Product.prototype, "image", void 0);
tslib_1.__decorate([
    mongo_1.prop({ type: String, required: true }),
    validator_1.string().optional(),
    tslib_1.__metadata("design:type", String)
], Product.prototype, "brand", void 0);
tslib_1.__decorate([
    mongo_1.prop({ type: String, required: true }),
    validator_1.string().optional(),
    tslib_1.__metadata("design:type", String)
], Product.prototype, "category", void 0);
tslib_1.__decorate([
    mongo_1.prop({ type: String, required: true }),
    validator_1.string().required(),
    tslib_1.__metadata("design:type", String)
], Product.prototype, "description", void 0);
tslib_1.__decorate([
    mongo_1.prop([review_1.Review]),
    tslib_1.__metadata("design:type", Array)
], Product.prototype, "reviews", void 0);
tslib_1.__decorate([
    mongo_1.prop({ type: Number, required: true, default: 0 }),
    tslib_1.__metadata("design:type", Number)
], Product.prototype, "rating", void 0);
tslib_1.__decorate([
    mongo_1.prop({ type: Number, required: true, default: 0 }),
    tslib_1.__metadata("design:type", Number)
], Product.prototype, "numReviews", void 0);
tslib_1.__decorate([
    mongo_1.prop({ type: Number, required: true, default: 0 }),
    validator_1.number().required(),
    tslib_1.__metadata("design:type", Number)
], Product.prototype, "price", void 0);
tslib_1.__decorate([
    mongo_1.prop({ type: Number, required: true, default: 0 }),
    validator_1.number().optional(),
    tslib_1.__metadata("design:type", Number)
], Product.prototype, "countInStock", void 0);
Product = tslib_1.__decorate([
    mongo_1.schema("Product", { timestamps: true }),
    mongo_1.model()
], Product);
exports.Product = Product;
//# sourceMappingURL=product.js.map