import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TransferDetailsPage } from './transfer-details';

@NgModule({
  declarations: [
    TransferDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(TransferDetailsPage),
  ],
})
export class TransferDetailsPageModule {}
