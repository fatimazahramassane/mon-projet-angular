import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  imports: [NgforOf, NgIf],
  templateUrl: './products.html',
  styleUrl: './products.css',
  standalone:true
})
export class Products implement OnInit{
  products : any ;

  constructor(private productService : ProductService){

    }
  ngOnInit(){
     this.getAllProducts()

    }
  getAllProducts(){
     this.product =this.productService.getAllProducts();

    }
  handleDelete(product:any):{
    let v = confirm("etes vous sure de la supprmier ");
    if(v==true){
      this.productService.deleteProduct(product);
      this.getAllProducts();}
  }
