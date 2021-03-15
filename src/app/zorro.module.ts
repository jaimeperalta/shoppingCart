import { NgModule } from '@angular/core';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzCardModule } from 'ng-zorro-antd/card';

@NgModule({
  exports: [
      NzLayoutModule,
      NzMenuModule,
      NzButtonModule,
      NzIconModule,
      NzModalModule,
      NzInputModule,
      NzFormModule,
      NzUploadModule,
      NzMessageModule,
      NzImageModule,
      NzCardModule
  ]
})

export class ZorroModule {

}