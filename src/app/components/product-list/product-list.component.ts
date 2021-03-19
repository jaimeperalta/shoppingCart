import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Product } from 'src/app/interfaces/product';
import { CartService } from 'src/app/services/cart.service';
import { EventosService } from 'src/app/services/eventos.service';
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
  service:any;
  isOkLoading:boolean = false;
  constructor(
    private productsService: ProductsService,
    private cartService: CartService,
    private message: NzMessageService,
    private eventService: EventosService
  ) { 
    console.log("suscribirse")
    this.service = this.eventService.getEvent().subscribe((evt)=>{
      if(evt.tipo == "reloadProducts"){
        this.products = [];
        this.getProducts();
      }
    })
  }

  ngOnInit(): void {
    this.getProducts();
  }

  ngOnDestroy(){
    this.service.unsubscribe();
  }

  async getProducts(){
    this.products = await this.productsService.getProducts();
    console.log(this.products);
  }

  async add(){
    this.isOkLoading = true;
    let addCart = await this.cartService.addToCart(this.productDetails);
    console.log("agregar ",addCart);
    if(addCart.status == "success"){
      this.isOkLoading = false;
      this.message.success("Producto agregado al carrito")
      this.isVisible = false;
      this.productDetails =  this.productState
    }
    else if(addCart.status == "noUser"){
      this.isOkLoading = false;
      this.message.error("Inicia sesión para agregar el producto");
    }
    else{
      this.isOkLoading = false;
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
