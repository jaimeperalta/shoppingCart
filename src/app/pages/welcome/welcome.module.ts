import { NgModule } from '@angular/core';
import { ZorroModule } from 'src/app/zorro.module';
import { WelcomeRoutingModule } from './welcome-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WelcomeComponent } from './welcome.component';
import { CommonModule } from '@angular/common';  
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [CommonModule,WelcomeRoutingModule,ZorroModule,FormsModule,ReactiveFormsModule,ComponentsModule],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule { 
}
