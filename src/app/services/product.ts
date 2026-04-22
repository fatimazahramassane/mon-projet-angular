import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
}
export class Product {
 this.products =[
                        {id : 1, name : "Computer", price : 2300 , selected:true}
                        {id : 2,name : "Printer", price : 1200 , selected:false}
                        {id : 3,name : "Smart Phone", price : 1100 , selected:true}

                        ]
  constructor(private http : HttpClient){}
  getAllProducts():Obeservable<any>{
    return this.http.get("http://localhost:8883/products");
    }
  deleteProduct(product :any){
    this.product=this.product.filter((p:any)=>p.id !=product.id );}
    }


  }















