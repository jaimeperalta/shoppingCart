import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import firebase  from 'firebase';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  product:Product [] = [];
  constructor(
    private authService: AuthService
  ) { }

   createProduct(product:Product){
    return new Promise<{status:string,id?:string}>(async (resolve)=>{
      let upload = await this.uploadImage(product.image);
      if(upload.status == "success"){
        let user = this.authService.getUser();
        let insert = await this.insertProduct(product,upload.id,upload.url as string,user.uid);
        resolve({status:insert.status});
      }
      else resolve({status:upload.status});
    })
  }

  insertProduct(product:Product,id:string,url:string,uid:string){
     product.image = url;
     let fecha = +new Date();
    return new Promise<{status:string}>((resolve)=>{
      firebase.firestore().collection("products").doc(id).set({
       ...product,
       fecha,
       id,
       uid
      })
      .then(()=>{
        resolve({status:"success"})
      })
      .catch((e)=>{
        resolve({status:"fail"})
      })
    })
  }

  uploadImage(image:string){
    return new Promise<{status:string,id:string,url?:string}>((resolve)=>{
      let id = firebase.firestore().collection("products").doc().id;
      let storageRef = firebase.storage().ref(`images/products/${id}`);
  
      storageRef.putString(image,'data_url')
      .then(async (snapshot) =>{
        let url = await storageRef.getDownloadURL();
        resolve({status:"success",id, url})
      })
      .catch((e)=>{
        resolve({status:"fail",id:''});
      })
    })
  }

  getProducts(){
    return new Promise<Array<Product>>((resolve)=>{
      firebase.firestore().collection("products")
      .orderBy("fecha", "desc")
      .get()
      .then((res)=>{
        if(res.empty)resolve([])
        else {
          let products:Array<Product> = res.docs.map((doc:any) =>{ 
            return {...doc.data(),key:doc.id}
          });
          resolve(products)
        }
      })
      .catch((e)=>{
        resolve([]);
      })
    })
  }
}
