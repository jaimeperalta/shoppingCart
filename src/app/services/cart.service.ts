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
        console.log(res);
        if(res.empty)resolve({status:"noCart"});
        else{
          let fil = res.docs.filter((doc)=>doc.data().status == "pending")
          console.log(fil);
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
      let verify = await this.verifyProductCartExist(product_id,cart_id);
      if(verify.status == "newData"){
        firebase.firestore()
        .collection(`products_carts`)
        .doc()
        .set({
          product_id,
          cart_id,
          quantity:1
        })
        .then((res)=>{
          resolve({status:"success"})
        })
        .catch((e)=>{
          resolve({status:"failInsertCart"})
        })
      }
      else{
        console.log("actualizando producto del carrito");
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
          console.log("data  verify",info[0]);
          resolve({status:"update",id:info[0]})
        }
      })
    })
  }
}
