import { Injectable } from '@angular/core';
import firebase  from 'firebase';
import { Product } from '../interfaces/product';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(
    private authService: AuthService
  ) { }

  addToCart(product:Product){
    return new Promise<{status:string}>(async (resolve)=>{
      let user = this.authService.getUser();
      if(!user) resolve({status:"noUser"});
      else{
        let searchActual = await this.searchActualCart(user.uid)
        if(searchActual.status == "noCart"){
          let newCart = await this.createCart(user.uid);
          if(newCart.status == "successCreate"){
            let insert = await this.insertCart(product.key as string,newCart.id)
            resolve({status:insert.status})
          }else{
            resolve({status:newCart.status})
          }
        }
        else{
          let insert = await this.insertCart(product.key as string,searchActual.id as string)
          resolve({status:insert.status})
        }
      }
    })
  }

  searchActualCart(uid:string){
    return new Promise<{status:string,id?:string}>((resolve)=>{
      firebase.firestore()
      .collection('carts')
      .doc(uid)
      .collection("cartsList")
      .get()
      .then((res)=>{
        if(res.empty)resolve({status:"noCart"});
        else{
          let fil = res.docs.filter((doc)=>doc.data().status == "pending")
          if(fil.length > 0){
            resolve({status:"cartExist",id:fil[0].id})
          }
          else{
            resolve({status:"noCart"});
          }
        }
      })
      .catch((e)=>{
        resolve({status:"errorGetCart"})
      })
    })
  }

  createCart(uid:string){
    return new Promise<{status:string,id:string}>((resolve)=>{
      let id = firebase.firestore().collection(`carts/${uid}/carts`).doc().id;
      firebase.firestore()
      .collection(`carts`)
      .doc(uid)
      .collection("cartsList")
      .doc(id)
      .set({
        id,
        status:"pending"
      })
      .then((res)=>{
        resolve({status:"successCreate",id})
      })
      .catch((e)=>{
        resolve({status:"errorCreate",id})
      })
    })
  }

  insertCart(product_id:string,cart_id:string){
    return new Promise<{status:string}>(async (resolve)=>{
      let fecha_carrito = +new Date();
      let verify = await this.verifyProductCartExist(product_id,cart_id);
      if(verify.status == "newData"){
        firebase.firestore()
        .collection(`products_carts`)
        .doc()
        .set({
          product_id,
          cart_id,
          quantity:1,
          fecha_carrito
        })
        .then((res)=>{
          resolve({status:"success"})
        })
        .catch((e)=>{
          resolve({status:"failInsertCart"})
        })
      }
      else{
        firebase.firestore()
        .collection(`products_carts`)
        .doc(verify.id)
        .update({
          quantity:firebase.firestore.FieldValue.increment(1)
        }).then((res)=>{
          resolve({status:"success"})
        })
        .catch((e)=>{
          resolve({status:"failInsertCart"})
        })
      }
    })
  }

  verifyProductCartExist(product_id:string,cart_id:string){
    return new Promise<{status:string,id:string}>((resolve)=>{
      firebase.firestore()
      .collection(`products_carts`)
      .where("cart_id", "==",cart_id)
      .where("product_id", "==",product_id)
      .get()
      .then((res)=>{
        if(res.empty)resolve({status:"newData",id:""})
        else {
          let info = res.docs.map((doc)=> doc.id)
          resolve({status:"update",id:info[0]})
        }
      })
    })
  }
  

  getUserCart(indexId:number = 0){
    return new Promise<{status:string,cart:Array<Product>,lastKey:number}>(async (resolve)=>{
      let user = this.authService.getUser();

      let searchActual = await this.searchActualCart(user.uid)
      if(searchActual.status == "noCart"){
        resolve({status:"success",cart:[],lastKey:0})
      }
      else{
        if(indexId == 0) indexId = +new Date();
        firebase.firestore().collection("products_carts")
        .where("cart_id","==",searchActual.id)
        .orderBy("fecha_carrito", "desc")
        .startAt(indexId)
        .limit(10)
        .get()
        .then(async (res)=>{
          if(res.empty)resolve({status:"success",cart:[],lastKey:0})
          else {
            let idProducts:Array<string> = res.docs.map((doc:any) =>{ 
              return doc.data().product_id
            });
            let quantities:Array<{id:string,quantity:number,product_cart_id:string}> = res.docs.map((doc:any) =>{ 
              return {id:doc.data().product_id,quantity:doc.data().quantity,product_cart_id:doc.id}
            });

            let products:Array<Product> = await this.getProductsCart(idProducts,quantities);
            let lastKey:number = +(res.docs.slice(-1)[0].data().fecha_carrito)
            resolve({status:"success",cart:products,lastKey})
          }
        })
        .catch((e)=>{
          resolve({status:"failure",cart:[],lastKey:0});
        })
      }
    })
  }


  getProductsCart(idProducts:Array<string>,quantities:Array<{id:string,quantity:number,product_cart_id:string}>){
    console.log(idProducts)
    return new Promise<Array<Product>>((resolve)=>{
      firebase.firestore().collection("products")
      .where("id", "in",idProducts)
      .get()
      .then((res)=>{
        if(res.empty)resolve([])
        else {
          let products:Array<Product> = res.docs.map((doc:any) =>{ 
            let quantity= quantities.filter((row)=>row.id == doc.id) ;
            return {...doc.data(),
              key: doc.id,
              quantity: quantity[0].quantity,
              product_cart_id: quantity[0].product_cart_id
            }
          });
          resolve(products)
        }
      })
      .catch((e)=>{
        resolve([]);
      })
    })
  }

  updateCartQuantity(quantiy:number,key:string){
    firebase.firestore()
    .collection(`products_carts`)
    .doc(key)
    .update({
      quantity:quantiy
    })
    .then()
    .catch((e)=>{
      console.log("error update cart",e)
    })
  }

  removeCart(key:string){
    return new Promise<string>((resolve)=>{
      firebase.firestore()
      .collection(`products_carts`)
      .doc(key)
      .delete()
      .then(()=>{
        resolve("success");
      })
      .catch((e)=>{
        console.log("error remove cart",e)
        resolve("fail");
      })
    })
  }

  cartCompleted(){
    return new Promise<string>(async (resolve)=>{
      let user = this.authService.getUser();
      if(!user) resolve("noUser");
      else{
        let searchActual = await this.searchActualCart(user.uid)
        if(searchActual.status != "noCart"){
          let update = await this.updateCartStatus(user.uid,searchActual.id as string);
          resolve(update);
        }
      }
    })
  }

  private updateCartStatus(uid:string,idCart:string){
    return new Promise<string>((resolve)=>{
      firebase.firestore()
      .collection('carts')
      .doc(uid)
      .collection("cartsList")
      .doc(idCart)
      .update({
        status:"completed"
      })
      .then(()=>{
        resolve("success")
      })
      .catch((e)=>{
        console.log(e);
        resolve("fail")
      })
    })
  }
}
