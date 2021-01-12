import {Schema, schema, prop, propRef, Ref, pre, method, model, mongoose, Model, Doc} from "@appolo/mongo";
import {string,boolean,number,} from "@appolo/validator"

@schema('ShippingAddress', {timestamps: true})
export class ShippingAddress extends Schema {
    @prop({type: String, required: true})
    @string().required()
    address: string

    @prop({type: String, required: true})
    @string().required()
    city: string

    @prop({type: String, required: true})
    @string().required()
    postalCode: string

    @string().required()
    @prop({type: String, required: true})
    country: string
}
