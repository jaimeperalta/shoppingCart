import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ZorroModule } from '../zorro.module';


@NgModule({
    imports:[
        CommonModule,
        ZorroModule
    ],
    exports: [
        ProductListComponent
    ],
    declarations:[
        ProductListComponent
    ]
})

export class ComponentsModule {}