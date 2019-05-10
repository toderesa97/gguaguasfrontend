import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {AddServiceProvider} from "../../providers/add-service/add-service-provider";
import {HotelProvider} from "../../providers/hotel/hotel";

@IonicPage()
@Component({
  selector: 'page-add-service',
  templateUrl: 'add-service.html',
})
export class AddServicePage {

  name: string;
  destiny: string;
  origin: string;
  seats: string;
  company: string;
  directionCompany: string;
  transferDate: string;
  transferTime: string;
  description: string;
  vehicle: string;

  private hotels = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public viewController: ViewController,
              public addServiceProvider: AddServiceProvider,
              public hotelProvider: HotelProvider) {
    this.hotelProvider.getAll().subscribe(
      (hotels : any) => {
        console.log(hotels);
        this.hotels = hotels
      }
    )
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddServicePage');
    this.vehicle = this.navParams.get('vehicle');
  }

  closeModal() {
    this.viewController.dismiss();
  }

  addNewService() {
    console.log(this.name, this.destiny, this.origin, this.seats,
                this.company, this.directionCompany, this.transferDate,
                this.transferTime, this.description, this.vehicle);

    this.addServiceProvider.add(this.name, this.destiny, this.origin, this.seats,
                                        this.company, this.directionCompany, this.transferDate,
                                        this.transferTime, this.description, this.vehicle).subscribe(
                                          (res: any) => {
                                            console.log(res);
                                            this.closeModal();
                                          }, error => console.log(error)
                                        );
  }


  getDirectionHotel() {
    return "C. Marin y Cubas, 19";
  }
}
