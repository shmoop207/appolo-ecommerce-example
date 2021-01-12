"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const tslib_1 = require("tslib");
const route_1 = require("@appolo/route");
const inject_1 = require("@appolo/inject");
const productsManager_1 = require("../managers/productsManager");
const validator_1 = require("@appolo/validator");
const productRouteModel_1 = require("./models/productRouteModel");
const product_1 = require("../models/product");
const user_1 = require("../../users/models/user");
const authMiddleware_1 = require("../../users/middlewares/authMiddleware");
const adminMiddleware_1 = require("../../users/middlewares/adminMiddleware");
let ProductController = class ProductController extends route_1.StaticController {
    async getProducts(query) {
        let params = { pageSize: query.pageSize, page: query.pageNumber };
        if (query.keyword) {
            params.filter = { name: { $regex: query.keyword, $options: "i", } };
        }
        let { results, count } = await this.productsManager.getAll(params);
        return { products: results, page: query.pageNumber, pages: Math.ceil(count / query.pageSize) };
    }
    async getProductById(id) {
        const product = await this.productsManager.getById(id);
        if (product) {
            return product;
        }
        throw new route_1.NotFoundError("Product not found");
    }
    async deleteProduct(id) {
        await this.productsManager.deleteById(id);
        return { message: "Product Removed" };
    }
    async createProduct(body) {
        let product = await this.productsManager.create(body);
        return product;
    }
    async updateProduct(id, body) {
        const product = await this.productsManager.updateByIdAndSave(id, body);
        return product;
    }
    async createProductReview(id, user, body) {
        await this.productsManager.addReview(id, user, body);
        return { message: "Review added" };
    }
};
tslib_1.__decorate([
    inject_1.inject(),
    tslib_1.__metadata("design:type", productsManager_1.ProductsManager)
], ProductController.prototype, "productsManager", void 0);
tslib_1.__decorate([
    route_1.get("/"),
    tslib_1.__param(0, validator_1.validateQuery()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [productRouteModel_1.GetProductsModel]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductController.prototype, "getProducts", null);
tslib_1.__decorate([
    route_1.get("/:id"),
    tslib_1.__param(0, route_1.param()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductController.prototype, "getProductById", null);
tslib_1.__decorate([
    route_1.del("/:id"),
    route_1.middleware(authMiddleware_1.AuthMiddleware, adminMiddleware_1.AdminMiddleware),
    tslib_1.__param(0, route_1.param()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductController.prototype, "deleteProduct", null);
tslib_1.__decorate([
    route_1.post("/"),
    route_1.statusCode(201),
    route_1.middleware(authMiddleware_1.AuthMiddleware, adminMiddleware_1.AdminMiddleware),
    tslib_1.__param(0, validator_1.validateBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [product_1.Product]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductController.prototype, "createProduct", null);
tslib_1.__decorate([
    route_1.put("/:id"),
    route_1.middleware(authMiddleware_1.AuthMiddleware, adminMiddleware_1.AdminMiddleware),
    tslib_1.__param(0, route_1.param()), tslib_1.__param(1, validator_1.validateBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, product_1.Product]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductController.prototype, "updateProduct", null);
tslib_1.__decorate([
    route_1.post(":id/reviews"),
    route_1.statusCode(201),
    route_1.middleware(authMiddleware_1.AuthMiddleware),
    tslib_1.__param(0, route_1.param()), tslib_1.__param(1, authMiddleware_1.user), tslib_1.__param(2, validator_1.validateBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, user_1.User, productRouteModel_1.ReviewModel]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductController.prototype, "createProductReview", null);
ProductController = tslib_1.__decorate([
    route_1.controller("/api/products"),
    inject_1.singleton()
], ProductController);
exports.ProductController = ProductController;
//# sourceMappingURL=productController.js.map