import { Injectable } from "@angular/core";
import { IProduct } from "./product";

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    getProducts(): IProduct[] {
        return [
            {
                "productId": 1,
                "productName": "Leaf Rake",
                "productCode": "GDN-0011",
                "releaseDate": "March 19, 2016",
                "description": "Leaf rake with 48-inch wooden handle.",
                "price": 19.95,
                "starRating": 3.2,
                "imageUrl": "https://cdn.pixabay.com/photo/2019/06/04/19/54/norway-4252178_960_720.jpg"
            },
            {
                "productId": 2,
                "productName": "Garden Cart",
                "productCode": "GDN-0023",
                "releaseDate": "March 18, 2016",
                "description": "15 gallon capacity rolling garden cart",
                "price": 32.99,
                "starRating": 4.2,
                "imageUrl": "https://cdn.pixabay.com/photo/2012/11/06/15/40/tree-64310_960_720.jpg"
            }
        ];
    }
}