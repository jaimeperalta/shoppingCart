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
    console.log(product);
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
    return new Promise<{status:string}>((resolve)=>{
      firebase.firestore().collection("products").doc(id).set({
       ...product,
       uid
      })
      .then(()=>{
        resolve({status:"success"})
      })
      .catch((e)=>{
        console.log(e)
        resolve({status:"fail"})
      })
    })
  }

  uploadImage(image:string){
    return new Promise<{status:string,id:string,url?:string}>((resolve)=>{
      let id = firebase.firestore().collection("products").doc().id;
      console.log(id);
      let storageRef = firebase.storage().ref(`images/products/${id}`);
  
      storageRef.putString(image,'data_url')
      .then(async (snapshot) =>{
        console.log('Uploaded a data_url string! ');
        let url = await storageRef.getDownloadURL();
        console.log("la url ",url);
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
      .get()
      .then((res)=>{
        console.log(res);
        if(res.empty)resolve([])
        else {
          let products:Array<Product> = res.docs.map((doc:any) =>{ 
            return {...doc.data(),key:doc.id}
          });
          resolve(products)
        }
      })
      .catch((e)=>{
        console.log(e);
        resolve([]);
      })
    })
  }
}
