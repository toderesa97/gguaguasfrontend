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
import {MinibusPage} from "../pages/minibus/minibus";
import {AddMinibusServicePage} from "../pages/add-minibus-service/add-minibus-service";
import { AddMinibusServiceProvider } from '../providers/add-minibus-service/add-minibus-service-provider';
import {MinibusDetailPage} from "../pages/minibus-detail/minibus-detail";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    VehiclesPage,
    AddVehiclePage,
    MinibusPage,
    AddMinibusServicePage,
    MinibusDetailPage
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
    MinibusPage,
    AddMinibusServicePage,
    MinibusDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    VehicleProvider,
    AddMinibusServiceProvider
  ]
})
export class AppModule {}
