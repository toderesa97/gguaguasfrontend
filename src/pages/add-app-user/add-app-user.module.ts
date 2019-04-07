import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddAppUserPage } from './add-app-user';

@NgModule({
  declarations: [
    AddAppUserPage,
  ],
  imports: [
    IonicPageModule.forChild(AddAppUserPage),
  ],
})
export class AddAppUserPageModule {}
