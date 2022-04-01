import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Product } from "./interfaces/product";

@Injectable({
    providedIn: 'root'
})

export class JSONService{
    constructor (private http: HttpClient){}

    getJSONProducts(url:string){
        return this.http.get<Product>(url);
    }
}
