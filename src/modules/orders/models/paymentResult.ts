import {Schema, schema, prop, propRef, Ref, pre, method, model, mongoose, Model, Doc} from "@appolo/mongo";
import {string,boolean,number,} from "@appolo/validator"

@schema('PaymentResult', {timestamps: true})
export class PaymentResult extends Schema {
    @prop({type: String})
    @string().required()
    id: string

    @prop({type: String})
    @string().required()
    status: string

    @prop({type: String})
    @string().required()
    update_time: string

    @prop({type: String})
    @string().required()
    email_address: string
}
