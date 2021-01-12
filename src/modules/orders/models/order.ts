import {Schema, schema, Ref, prop, propRef, model, mongoose, Model, Doc} from "@appolo/mongo";
import {User} from "../../users/models/user";
import {OrderItem} from "./orderItem";
import {ShippingAddress} from "./shippingAddress";
import {PaymentResult} from "./paymentResult";
import {string,boolean,number,array,object} from "@appolo/validator"

@schema("Order", {timestamps: true})
@model()
export class Order extends Schema {
    @propRef(User, {required: true})
    user: Ref<User>

    @prop([OrderItem])

    orderItems:OrderItem[]

    @prop(ShippingAddress)
    @object().keys(ShippingAddress)
    shippingAddress:ShippingAddress

    @prop({type: String, required: true})
    @string()
    paymentMethod: string;

    @prop(PaymentResult)
    paymentResult: PaymentResult

    @prop({type: Number, required: true, default: 0.0})
    taxPrice: number

    @prop({type: Number, required: true, default: 0.0})
    shippingPrice: number

    @prop({type: Number, required: true, default: 0.0})
    totalPrice: number

    @prop({type: Boolean, required: true, default: false})
    isPaid: boolean

    @prop({type: Date})
    paidAt: Date

    @prop({type: Boolean, required: true, default: false})
    isDelivered: boolean;

    @prop({type: Date,})
    deliveredAt: Date
}

export type OrderModel = Model<Order>
export type OrderDoc = Doc<Order>

