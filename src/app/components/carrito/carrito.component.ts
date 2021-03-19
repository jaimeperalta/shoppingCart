import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Product } from 'src/app/interfaces/product';
import { CartService } from 'src/app/services/cart.service';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {
  products:Product[] = [];
  lastKey:number = 0;
  isOkLoading:boolean = false;
  constructor(
    private modal: NzModalService,
    private cartService: CartService,
    private messageService:NzMessageService
  ) { }

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts(){
    this.isOkLoading = false;
    this.lastKey = 0;
    this.products = [];
    this.getProducts();
  }

  async getProducts(){
    let products = await this.cartService.getUserCart(this.lastKey);
    console.log(products);
    if(products.status == "success"){
      this.products = [...this.products,...products.cart];
      this.lastKey = products.lastKey;
    }
  }

  decrement(index:number){
    if(this.products[index].quantity as number > 1){
      (this.products[index].quantity as number)-- ;
      this.cartService.updateCartQuantity(this.products[index].quantity as number,this.products[index].product_cart_id as string)
    }
  }

  add(index:number){
    (this.products[index].quantity as number)++ ;
    this.cartService.updateCartQuantity(this.products[index].quantity as number,this.products[index].product_cart_id as string)
  }

  confirmRemove(index:number){
    this.modal.confirm({
      nzTitle: 'Estas seguro de eliminar el producto del carrito?',
      nzOkText: 'Sí',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzOnOk: () => this.remove(index),
      nzCancelText: 'No',
      nzOnCancel: () => console.log('Cancel')
    });
  }

  async remove(index:number){
    let removeCart = await this.cartService.removeCart(this.products[index].product_cart_id as string)
    if(removeCart == "fail")this.messageService.error("No se pudo eliminar el producto del carrito");
    else this.loadProducts()
  }

  async completeOrder(){
    this.isOkLoading = true;
    let order = await this.cartService.cartCompleted();
    if(order == "success")this.loadProducts();
    else{
      this.isOkLoading = false;
      this.messageService.error("Algo ha ocurrido y no es posible completar tu orden en este momento, intenta más tarde");
    }

  }

}
