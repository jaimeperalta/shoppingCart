import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Product } from 'src/app/interfaces/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products:Product[] = [];
  isVisible:boolean = false;
  productState = {
    name:"",
    image:"",
    description: "",
    sku: "",
    key:""
  }
  constructor(
    private productsService: ProductsService,
    private cartService: CartService,
    private message: NzMessageService
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  async getProducts(){
    this.products = await this.productsService.getProducts();
    console.log(this.products);
  }

  async add(){
    let addCart = await this.cartService.addToCart(this.productDetails);
    console.log("agregar ",addCart);
    if(addCart.status == "success"){
      this.message.success("Producto agregado al carrito")
      this.isVisible = false;
      this.productDetails =  this.productState
    }
    else if(addCart.status == "noUser"){
      this.message.error("Inicia sesión para agregar el producto");
    }
    else{
      this.message.warning("Algo salido mal al agregar el producto, intenta más tarde");
    }
  }

  productDetails:Product = this.productState

  showModal(product:Product) {
    this.productDetails = product;
    this.isVisible = true;
  } 

  handleCancel() {
    this.isVisible = false;
  }
}
