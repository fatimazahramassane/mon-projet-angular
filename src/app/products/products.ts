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
     this.product =this.productService.getAllProducts().subscribe({
       next: resp => {
         this.product =resp ;},
       error : err => {
         console.log(err);
         }
       });

    }
  handleDelete(product:any):{
    let v = confirm("etes vous sure de la supprmier ");
    if(v==true){
      this.productService.deleteProduct(product).subscribe({
         next: value=> {
                 this.getAllProducts();},
               error : err => {
                 console.log(err);
                 }
        });
      this.getAllProducts();}
  }
