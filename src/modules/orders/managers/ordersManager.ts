import {define, singleton} from "@appolo/inject"
import {model, BaseCrudManager, Doc} from "@appolo/mongo"
import {Order, OrderModel} from "../models/order";


@define()
@singleton()
export class OrdersManager extends BaseCrudManager<Order> {

    @model(Order) protected model:OrderModel



}
