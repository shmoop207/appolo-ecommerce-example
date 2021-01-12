"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsManager = void 0;
const tslib_1 = require("tslib");
const inject_1 = require("@appolo/inject");
const mongo_1 = require("@appolo/mongo");
const product_1 = require("../models/product");
let ProductsManager = class ProductsManager extends mongo_1.BaseCrudManager {
    async addReview(id, user, reviewDto) {
        const product = await this.getById(id);
        if (!product) {
            throw new Error("Product not found");
        }
        const alreadyReviewed = product.reviews.find((r) => r.user.toString() === user._id.toString());
        if (alreadyReviewed) {
            throw new Error("Product already reviewed");
        }
        const review = {
            name: user.name,
            rating: reviewDto.rating,
            comment: reviewDto.comment,
            user: user._id,
        };
        product.reviews.push(review);
        product.numReviews = product.reviews.length;
        product.rating = product.reviews.reduce((acc, item) => item.rating + acc, 0) / product.reviews.length;
        await this.updateByIdAndSave(id, product.toJSON());
    }
};
tslib_1.__decorate([
    mongo_1.model(product_1.Product),
    tslib_1.__metadata("design:type", Object)
], ProductsManager.prototype, "model", void 0);
ProductsManager = tslib_1.__decorate([
    inject_1.define(),
    inject_1.singleton()
], ProductsManager);
exports.ProductsManager = ProductsManager;
//# sourceMappingURL=productsManager.js.map