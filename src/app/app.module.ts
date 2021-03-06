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
import {MinibusPage} from "../pages/minibus/minibus";
import {AddMinibusServicePage} from "../pages/add-minibus-service/add-minibus-service";
import { AddMinibusServiceProvider } from '../providers/add-minibus-service/add-minibus-service-provider';
import {MinibusDetailPage} from "../pages/minibus-detail/minibus-detail";
import { ClienteProvider } from '../providers/cliente/cliente';
import {ClienteDetailPage} from "../pages/cliente-detail/cliente-detail";
import {ClientesPage} from "../pages/clientes/clientes";
import {AddClientPage} from "../pages/add-client/add-client";
import { LoginProvider } from '../providers/login/login';
import {LoginPage} from "../pages/login/login";
import {IonicStorageModule} from "@ionic/storage";
import {AddAppUserPage} from "../pages/add-app-user/add-app-user";
import { AddAppUserProvider } from '../providers/add-app-user/add-app-user';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    VehiclesPage,
    AddVehiclePage,
    EditVehiclePage,
    MinibusPage,
    AddMinibusServicePage,
    MinibusDetailPage,
    ClienteDetailPage,
    ClientesPage,
    AddClientPage,
    LoginPage,
    AddAppUserPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    VehiclesPage,
    AddVehiclePage,
    EditVehiclePage,
    MinibusPage,
    AddMinibusServicePage,
    MinibusDetailPage,
    ClientesPage,
    ClienteDetailPage,
    AddClientPage,
    LoginPage,
    AddAppUserPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    VehicleProvider,
    AddMinibusServiceProvider,
    ClienteProvider,
    LoginProvider,
    AddAppUserProvider
  ]
})
export class AppModule {}
