import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddMinibusServicePage } from './add-service';

@NgModule({
  declarations: [
    AddMinibusServicePage,
  ],
  imports: [
    IonicPageModule.forChild(AddMinibusServicePage),
  ],
})
export class AddMinibusServicePageModule {}
