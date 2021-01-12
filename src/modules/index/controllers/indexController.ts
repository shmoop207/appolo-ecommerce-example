import {
    get,
    post,
    StaticController,
    controller,
    put,
    param,
    statusCode,
    BadRequestError,
    UnauthorizedError, NotFoundError, del
} from "@appolo/route";
import {inject, singleton} from "@appolo/inject";
import {view} from "@appolo/view";
import {Doc} from "@appolo/mongo";
import path =require("path");


@controller()
@singleton()
export class IndexController extends StaticController {



    @get("*")
    @view(path.join(__dirname,"../../../../client/build/index.html"))
    public async index() {


    }



}

