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
import {ServicesPage} from "../pages/services/services";
import {AddServicePage} from "../pages/add-service/add-service";
import { AddServiceProvider } from '../providers/add-service/add-service-provider';
import {ServicesDetailPage} from "../pages/services-detail/services-detail";
import { ClienteProvider } from '../providers/cliente/cliente';
import {ClienteDetailPage} from "../pages/cliente-detail/cliente-detail";
import {ClientesPage} from "../pages/clientes/clientes";
import {AddClientPage} from "../pages/add-client/add-client";
import { LoginProvider } from '../providers/login/login';
import {LoginPage} from "../pages/login/login";
import {IonicStorageModule} from "@ionic/storage";
import {AddAppUserPage} from "../pages/add-app-user/add-app-user";
import { AddAppUserProvider } from '../providers/add-app-user/add-app-user';

import {AddTransfersPartsProvider } from '../providers/add-transfers-parts/add-transfers-parts';
import {AddTransfersFiltersProvider } from '../providers/add-transfers-filters/add-transfers-filters';
import {DataProvider } from '../providers/add-transfers-filters/data';
import {AddFilterPage} from "../pages/add-filter/add-filter";

import {PartsPage} from "../pages/parts/parts";
import {TransfersPage} from "../pages/transfers/transfers";
import {ServicesButtonsPage} from "../pages/services-buttons/services-buttons";

import {DriversPage} from "../pages/drivers/drivers";
import {AddDriverPage} from "../pages/add-driver/add-driver";
import {DriverProvider } from '../providers/driver/driver';

import {HotelsPage} from "../pages/hotels/hotels";
import {AddHotelPage} from "../pages/add-hotel/add-hotel";
import { HotelProvider } from '../providers/hotel/hotel';
import {SettingsPage} from "../pages/settings/settings";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    VehiclesPage,
    AddVehiclePage,
    EditVehiclePage,
    ServicesPage,
    AddServicePage,
    ServicesDetailPage,
    ClienteDetailPage,
    ClientesPage,
    AddClientPage,
    ServicesButtonsPage,
    DriversPage,
    AddDriverPage,
    HotelsPage,
    AddHotelPage,
    PartsPage,
    TransfersPage,
    AddFilterPage,
    LoginPage,
    AddAppUserPage,
    SettingsPage
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
    ServicesPage,
    AddServicePage,
    ServicesDetailPage,
    ClientesPage,
    ClienteDetailPage,
    AddClientPage,
    ServicesButtonsPage,
    DriversPage,
    AddDriverPage,
    HotelsPage,
    AddHotelPage,
    PartsPage,
    TransfersPage,
    AddFilterPage,
    LoginPage,
    AddAppUserPage,
    SettingsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    VehicleProvider,
    AddServiceProvider,
    ClienteProvider,
    DriverProvider,
    HotelProvider,
    AddTransfersPartsProvider,
    AddTransfersFiltersProvider,
    DataProvider,
    LoginProvider,
    AddAppUserProvider
  ]
})
export class AppModule {}
