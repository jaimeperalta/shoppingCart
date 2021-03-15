import { Injectable } from '@angular/core';
import firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})

class user {
  displayName:string = "";
  email:string = "";
  uid:string = "";
}

export class AuthService {

  constructor() { }

  login(){
      let provider = new firebase.auth.GoogleAuthProvider();
      return new Promise((resolve)=>{
        firebase.auth().signInWithPopup(provider).then(async (result:any)=>{
          let validate = await this.validateUser(result.user);
          if(validate.status == "userExist"){
            resolve("success");
            localStorage.setItem("user",JSON.stringify({name:result.user.displayName,email:result.user.email,uid:result.user.uid}))
          }
          else resolve("noUser");
        })
        .catch((e)=>{
          resolve("erroLogin");
          console.log(e);
        });
      })
      
  }

  signup(){
     return new Promise((resolve)=>{
       let provider = new firebase.auth.GoogleAuthProvider();
       firebase.auth().signInWithPopup(provider)
       .then(async (result:any)=>{
         console.log(result);
         let validate = await this.validateUser(result.user);
         if(validate.status == "success")resolve("success");
         else resolve(validate.status);
       })
       .catch((error) => {
          resolve("erroLogin");
          console.log(error);
       });
     })
  }

  validateUser(user:user){
    return new Promise <{status:string}> ((resolve)=>{
      firebase.firestore().collection('users')
      .doc(user.uid)
      .get()
      .then(async (res)=>{
        if(res.exists){
          resolve({status:"userExist"});
        }
        else{
          let insert = await this.createUser(user);
          if(insert.status == "newUser")resolve({status:"success"})
          else resolve({status:insert.status})
        }
      })
      .catch((e)=>{
        console.log("error validar user ",e);
      })
    })
  }

  createUser(user:user){
    return new Promise<{status:string,user?:user}>((resolve)=>{
      firebase.firestore().collection("users").doc(user.uid).set({
        name:user.displayName,
        email: user.email,
        uid: user.uid
      })
      .then(()=>{
        resolve({status:"newUser",user})
      })
      .catch(()=>resolve({status:"errorCreateUser"}))
    })
  }

  logout(){
     return new Promise((resolve)=>{
      firebase.auth().signOut().then((res)=>{
        console.log(res);
        resolve(true);
      })
      .catch((e)=>{
        console.log('err logout',e);
        resolve(false);
      })
    })
  }

  getUser():user{
    let user:any = localStorage.getItem("user") as string;
    return JSON.parse(user);
  }
}
