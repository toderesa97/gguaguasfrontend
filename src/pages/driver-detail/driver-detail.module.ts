import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DriverDetailPage } from './driver-detail';

@NgModule({
  declarations: [
    DriverDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(DriverDetailPage),
  ],
})
export class DriverDetailPageModule {}
