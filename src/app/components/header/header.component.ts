import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ProductsService } from 'src/app/services/products.service';
import { EventosService } from 'src/app/services/eventos.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() componentLoad = new EventEmitter<string>();
  user:User = new User();
  isLoadingOne = false;
  validateForm!: FormGroup;
  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private message: NzMessageService,
    private productService: ProductsService,
    private evtService: EventosService
  ) { 
    this.user = this.authService.getUser() || {isLoged:false};
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      name: [null, [Validators.required]],
      sku: [null, [Validators.required]],
      description: [null, [Validators.required]]
    });
  }

  async login(){
    await this.authService.login();
    this.user = this.authService.getUser();
  }

  logout(){
    this.authService.logout();
    this.user.isLoged = false;
  }

  isVisible = false;
  isOkLoading = false;

  showModal() {
    this.isVisible = true;
  }

  handleCancel() {
    this.isVisible = false;
    this.setActiveCommponent();
  }

  lastComponentLoaded:string = ""
  loadComponent(component:string){
    this.lastComponentLoaded = component;
    this.componentLoad.emit(component);
  }

  async submitForm() {
    if(this.validateForm.status == "VALID"){
      if(this.imageSelect == ''){
        this.message.error("Debes subir una imagen");
      }
      else{
        console.log(this.validateForm);
        this.isOkLoading = true;
        let newProudct = await this.productService.createProduct({...this.validateForm.value, image:this.imageSelect});
        if(newProudct.status == "success") {
          this.message.success("Producto creado correctamente");
          this.setActiveCommponent();
          this.evtService.setEvent("reloadProducts");
          this.isVisible = false;
        }
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

  setActiveCommponent(){
    document.getElementsByClassName("crearP")[0].classList.toggle("ant-menu-item-selected",false);
    switch(this.lastComponentLoaded){
      case "cart":
        document.getElementsByClassName("cartP")[0].classList.toggle("ant-menu-item-selected",true);
        break;
      default:
          document.getElementsByClassName("homeP")[0].classList.toggle("ant-menu-item-selected",true);
        break;
    }
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
