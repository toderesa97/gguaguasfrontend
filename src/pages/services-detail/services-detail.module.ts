import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MinibusDetailPage } from './services-detail';

@NgModule({
  declarations: [
    MinibusDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(MinibusDetailPage),
  ],
})
export class MinibusDetailPageModule {}
