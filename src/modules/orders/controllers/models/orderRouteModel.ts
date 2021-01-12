import {string, boolean, number, array, object} from "@appolo/validator"
import {OrderItem} from "../../models/orderItem";
import {ShippingAddress} from "../../models/shippingAddress";

export class OrderRouteModel {
    @array().items(OrderItem).min(1).required()
    orderItems: OrderItem[];

    @object().keys(ShippingAddress).required()
    shippingAddress: ShippingAddress;

    @string().required()
    paymentMethod: string;

    @number().required()
    itemsPrice: number;

    @number().required()
    taxPrice: number;

    @number().required()
    shippingPrice: number

    @number().required()
    totalPrice: number
}


