import {define, singleton} from "@appolo/inject"
import {model, BaseCrudManager, Doc} from "@appolo/mongo"
import {Product, ProductModel} from "../models/product";
import {User} from "../../users/models/user";
import {ReviewModel} from "../controllers/models/productRouteModel";


@define()
@singleton()
export class ProductsManager extends BaseCrudManager<Product> {

    @model(Product) protected model: ProductModel

    public async addReview(id: string, user: User,reviewDto: ReviewModel) {
        const product = await this.getById(id);

        if (!product) {
            throw new Error("Product not found")
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


}
