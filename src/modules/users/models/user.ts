import {Schema, schema, prop, pre, method, model, mongoose, Model, Doc} from "@appolo/mongo";
import bcrypt  = require("bcryptjs");

@schema("User", {timestamps: true})
@model()
export class User extends Schema {

    _id: string

    @prop({type: String, required: true})
    name: string

    @prop({type: String, required: true, unique: true})
    email: string;

    @prop({type: String, required: true})
    password: string;

    @prop({type: Boolean, required: true, default: false})
    isAdmin: boolean

    @method()
    public async matchPassword(enteredPassword: string) {
        return await bcrypt.compare(enteredPassword, this.password);
    }

    @pre("save")
    private async _preSave(this: Doc<User>, next) {
        if (!this.isModified("password")) {
            next();
        }
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
    }
}


export type UserModel = Model<User>
export type UserDoc = Doc<User>

