import {string,boolean} from "@appolo/validator"
export class LoginModel {
    @string().email().required()
    email:string

    @string().required()
    password:string
}

export class RegisterUserModel extends LoginModel{
    @string().required()
    name:string

}

export class UpdateUserModel extends LoginModel{
    @string().optional()
    name:string

    @string().optional()
    email:string

    @boolean().optional()
    isAdmin:boolean

}


export class UpdateProfileModel extends LoginModel{
    @string().optional()
    name:string

    @string().optional()
    email:string

    @boolean().optional()
    password:string

}
