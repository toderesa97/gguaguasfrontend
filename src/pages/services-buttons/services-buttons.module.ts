import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ServicesButtonsPage } from './services-buttons';

@NgModule({
  declarations: [
    ServicesButtonsPage,
  ],
  imports: [
    IonicPageModule.forChild(ServicesButtonsPage),
  ],
})
export class ServicesButtonsPageModule {}
