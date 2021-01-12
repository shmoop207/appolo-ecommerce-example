import {Schema, schema, prop, propArray, propRef, Ref, pre, method, model, mongoose, Model, Doc} from "@appolo/mongo";
import {User} from "../../users/models/user";
import {Review} from "./review";
import {string,number} from "@appolo/validator";

@schema("Product", {timestamps: true})
@model()
export class Product extends Schema {
    @propRef(User, {required: true})
    user: Ref<User>

    @prop({type: String, required: true})
    @string().required()
    name: string;

    @prop({type: String, required: true})
    @string().optional()
    image: string;

    @prop({type: String, required: true})
    @string().optional()
    brand: string;

    @prop({type: String, required: true})
    @string().optional()
    category: string

    @prop({type: String, required: true})
    @string().required()
    description: string;

    @prop([Review])
    reviews: Review[]

    @prop({type: Number, required: true, default: 0})
    rating: number

    @prop({type: Number, required: true, default: 0})
    numReviews: number

    @prop({type: Number, required: true, default: 0})
    @number().required()
    price: number

    @prop({type: Number, required: true, default: 0})
    @number().optional()
    countInStock: number

}



export type ProductModel = Model<Product>
export type ProductDoc = Doc<Product>
