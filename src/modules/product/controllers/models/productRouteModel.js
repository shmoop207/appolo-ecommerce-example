"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewModel = exports.GetProductsModel = void 0;
const tslib_1 = require("tslib");
const validator_1 = require("@appolo/validator");
class GetProductsModel {
}
tslib_1.__decorate([
    validator_1.number().default(1),
    tslib_1.__metadata("design:type", Number)
], GetProductsModel.prototype, "pageNumber", void 0);
tslib_1.__decorate([
    validator_1.number().default(3),
    tslib_1.__metadata("design:type", Number)
], GetProductsModel.prototype, "pageSize", void 0);
tslib_1.__decorate([
    validator_1.string().optional(),
    tslib_1.__metadata("design:type", String)
], GetProductsModel.prototype, "keyword", void 0);
exports.GetProductsModel = GetProductsModel;
class ReviewModel {
}
tslib_1.__decorate([
    validator_1.number().optional(),
    tslib_1.__metadata("design:type", Number)
], ReviewModel.prototype, "rating", void 0);
tslib_1.__decorate([
    validator_1.string().optional(),
    tslib_1.__metadata("design:type", String)
], ReviewModel.prototype, "comment", void 0);
exports.ReviewModel = ReviewModel;
//# sourceMappingURL=productRouteModel.js.map