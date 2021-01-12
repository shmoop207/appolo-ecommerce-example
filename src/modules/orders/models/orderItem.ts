import {Schema, schema, prop, propRef, Ref, pre, method, model, mongoose, Model, Doc} from "@appolo/mongo";
import {User} from "../../users/models/user";
import {Product} from "../../product/models/product";
import {string,boolean,number,} from "@appolo/validator"

@schema('OrderItem', {timestamps: true})
export class OrderItem extends Schema {
    @prop({ type: String, required: true })
    @string().required()
    name: string;

    @prop({ type: Number, required: true })
    @number().required()
    qty: number

    @prop({ type: String, required: true })
    @string().optional()
    image: string

    @prop({ type: Number, required: true })
    @number().required()
    price: number

    @propRef(Product,{required: true})
    @string().required()
    product: Ref<Product>
}
