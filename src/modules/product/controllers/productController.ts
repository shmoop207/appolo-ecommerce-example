import {
    get,
    post,
    StaticController,
    controller,
    put, del,
    param,
    statusCode,
    BadRequestError,
    UnauthorizedError, NotFoundError, middleware
} from "@appolo/route";
import {inject, singleton} from "@appolo/inject";
import {OrdersManager} from "../../orders/managers/ordersManager";
import {ProductsManager} from "../managers/productsManager";
import {validateBody, validateQuery} from "@appolo/validator";
import {GetAllParams} from "@appolo/mongo";
import {GetProductsModel, ReviewModel} from "./models/productRouteModel";
import {Product} from "../models/product";
import {User} from "../../users/models/user";
import {AuthMiddleware, user} from "../../users/middlewares/authMiddleware";
import {AdminMiddleware} from "../../users/middlewares/adminMiddleware";

@controller("/api/products")
@singleton()
export class ProductController extends StaticController {
    @inject() productsManager: ProductsManager;

    @get("/")
    public async getProducts(@validateQuery() query: GetProductsModel) {

        let params: GetAllParams<Product> = {pageSize: query.pageSize, page: query.pageNumber}

        if (query.keyword) {
            params.filter = {name: {$regex: query.keyword, $options: "i",}}
        }

        let {results, count} = await this.productsManager.getAll(params)

        return {products: results, page: query.pageNumber, pages: Math.ceil(count / query.pageSize)}

    }

    @get("/:id")
    public async getProductById(@param() id: string) {
        const product = await this.productsManager.getById(id);

        if (product) {
            return product
        }

        throw new NotFoundError("Product not found");
    }


    @del("/:id")
    @middleware(AuthMiddleware,AdminMiddleware)
    public async deleteProduct(@param() id: string) {
        await this.productsManager.deleteById(id);

        return {message: "Product Removed"}
    }

    @post("/")
    @statusCode(201)
    @middleware(AuthMiddleware,AdminMiddleware)
    public async createProduct(@validateBody() body: Product) {

        let product = await this.productsManager.create(body)

        return product
    }


    @put("/:id")
    @middleware(AuthMiddleware,AdminMiddleware)
    public async updateProduct(@param() id: string, @validateBody() body: Product) {

        const product = await this.productsManager.updateByIdAndSave(id, body);

        return product;
    }


    @post(":id/reviews")
    @statusCode(201)
    @middleware(AuthMiddleware)
    public async createProductReview(@param() id: string, @user user: User, @validateBody() body: ReviewModel) {

        await this.productsManager.addReview(id, user, body);

        return {message: "Review added"}
    }
}


