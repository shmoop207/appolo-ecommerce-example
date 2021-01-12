import {Schema, schema, prop, propRef, Ref, pre, method, model, mongoose, Model, Doc} from "@appolo/mongo";
import {User} from "../../users/models/user";
import {number,string} from "@appolo/validator/index";

@schema('Review', {timestamps: true})
export class Review extends Schema {
    @prop({type: String, required: true})
    name: string

    @prop({type: Number, required: true})
    rating: number

    @prop({type: String, required: true})
    comment: string

    @propRef(User, {required: true})
    user: Ref<User>
}
