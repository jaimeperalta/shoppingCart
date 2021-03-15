import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  isLoadingOne = false;
  isLoadingTwo = false;

  validateForm!: FormGroup;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private message: NzMessageService,
    private productService: ProductsService
  ) { }

  ngOnInit() {
    this.validateForm = this.fb.group({
      name: [null, [Validators.required]],
      sku: [null, [Validators.required]],
      description: [null, [Validators.required]]
    });
  }


  isVisible = false;
  isOkLoading = false;

  showModal() {
    this.isVisible = true;
  }

  handleCancel() {
    this.isVisible = false;
  }

  async submitForm() {
    
    console.log("algo");
    if(this.validateForm.status == "VALID"){
      if(this.imageSelect == ''){
        this.message.error("Debes subir una imagen");
      }
      else{
        //guardar:
        console.log(this.validateForm);
        this.isOkLoading = true;
        let newProudct = await this.productService.createProduct({...this.validateForm.value, image:this.imageSelect});
        if(newProudct.status == "success") this.message.success("Producto creado correctamente"), this.isVisible = false;
        else this.message.error("Ocurrio un error al crear tu producto, intenta mas tarde");
        this.isOkLoading = false;
      }
    }else{
      for (const i in this.validateForm.controls) {
        this.validateForm.controls[i].markAsDirty();
        this.validateForm.controls[i].updateValueAndValidity();
      }
    }
  }

  login(){
    this.authService.login();
  }

  signup(){
    this.authService.signup();
  }

  logout(){
    this.authService.logout().then((res)=>{
      console.log(res);
    });
  }

  imageSelect:string = "";

  getImage(event:any){
    console.log(event);
    const file = event.target.files[0];
    console.log(file);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        this.imageSelect = reader.result as string;
    };
  }

}
