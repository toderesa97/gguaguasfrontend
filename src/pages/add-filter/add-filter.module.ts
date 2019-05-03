import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddFilterPage } from './add-filter';

@NgModule({
  declarations: [
    AddFilterPage,
  ],
  imports: [
    IonicPageModule.forChild(AddFilterPage),
  ],
})
export class AddFilterPageModule {}
