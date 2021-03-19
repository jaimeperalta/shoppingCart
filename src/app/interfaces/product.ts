export interface Product {
    description: string;
    name: string;
    sku: string;
    image:string;
    uid?:string;
    key?:string;
    quantity?:number;
    product_cart_id?:string;
}
