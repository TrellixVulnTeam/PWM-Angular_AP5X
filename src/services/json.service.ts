import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Product } from "../interfaces/product";
import { User } from "../interfaces/user";

@Injectable({
    providedIn: 'root'
})
export class JSONService{
    constructor (private http: HttpClient){}

    getJSONUsers(){
        const url:string = "../../assets/datos/usuarios.json";
        return this.http.get<User>(url);
    }

    getJSONProducts(){
        const url:string = "../../assets/datos/objetos.json";
        return this.http.get<Product>(url);
    }
}
