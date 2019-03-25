import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {VehiclesPage} from "../pages/vehicles/vehicles";
import {AddVehiclePage} from "../pages/add-vehicle/add-vehicle";
import { VehicleProvider } from '../providers/vehicle/vehicle';
import {HttpClientModule} from "@angular/common/http";
import {EditVehiclePage} from "../pages/edit-vehicle/edit-vehicle";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    VehiclesPage,
    AddVehiclePage,
    EditVehiclePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    VehiclesPage,
    AddVehiclePage,
    EditVehiclePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    VehicleProvider
  ]
})
export class AppModule {}
