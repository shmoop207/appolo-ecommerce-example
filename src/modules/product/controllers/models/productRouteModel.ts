import {string, boolean, number, array, object} from "@appolo/validator"

export class GetProductsModel {
    @number().default(1)
    pageNumber: number

    @number().default(3)
    pageSize: number

    @string().optional()
    keyword: string
}

export class ReviewModel {
    @number().optional()
    rating: number

    @string().optional()
    comment: string

}


