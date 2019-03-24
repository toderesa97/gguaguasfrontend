import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MinibusPage } from './minibus';

@NgModule({
  declarations: [
    MinibusPage,
  ],
  imports: [
    IonicPageModule.forChild(MinibusPage),
  ],
})
export class MinibusPageModule {}
