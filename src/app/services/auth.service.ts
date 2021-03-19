import { Injectable } from '@angular/core';
import firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})

class user {
  displayName:string = "";
  email:string = "";
  uid:string = "";
  photoURL:string = "";
}

export class AuthService {

  constructor() { }

  login(){
    return new Promise((resolve)=>{
      firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .then(() => {
        let provider = new firebase.auth.GoogleAuthProvider();
        provider.setCustomParameters({
          'prompt': 'select_account'
        });
        firebase.auth().signInWithPopup(provider).then(async (result:any)=>{
          let validate = await this.validateUser(result.user);
          if(validate.status == "userExist"){
            resolve("success");
            localStorage.setItem("user",JSON.stringify({name:result.user.displayName,email:result.user.email,uid:result.user.uid,photo:result.user.photoURL,isLoged:true}))
          }
          else resolve("noUser");
        })
        .catch((e)=>{
          resolve("erroLogin");
          console.log(e);
        });
      })
      .catch((e)=>{
        resolve("erroLogin");
        console.log(e);
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
        uid: user.uid,
        photo: user.photoURL
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
        localStorage.removeItem("user");
        resolve(true);
      })
      .catch((e)=>{
        resolve(false);
      })
    })
  }

  getUser():user{
    let user:any = localStorage.getItem("user") as string;
    return JSON.parse(user);
  }
}
