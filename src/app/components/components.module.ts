import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductListComponent } from './product-list/product-list.component';
import { ZorroModule } from '../zorro.module';
import { HeaderComponent } from './header/header.component';
import { CarritoComponent } from './carrito/carrito.component';


@NgModule({
    imports:[
        CommonModule,
        ZorroModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        ProductListComponent,
        HeaderComponent,
        CarritoComponent
    ],
    declarations:[
        ProductListComponent,
        HeaderComponent,
        CarritoComponent
    ]
})

export class ComponentsModule {}