import { Component } from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams, ViewController} from 'ionic-angular';
import {AddServiceProvider} from "../../providers/add-service/add-service-provider";
import {FormBuilder, FormGroup} from "@angular/forms";

@IonicPage()
@Component({
  selector: 'page-services-detail',
  templateUrl: 'services-detail.html',
})
export class ServicesDetailPage {

  private id: number;
  public details: any;
  vehicle: string;
  time: any;
  private loading;
  name: string;
  private formValues: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public addServiceProvider: AddServiceProvider,
              public viewController: ViewController,
              public loadingController: LoadingController,
              public formBuilder: FormBuilder) {
    this.vehicle = this.navParams.get('vehicle');
    this.id = navParams.get('id');
    this.formValues = this.formBuilder.group({
      name: [''],
      destiny: [''],
      origin: [''],
      seats: [''],
      company: [''],
      directionCompany: [''],
      transferDate: [''],
      transferTime: [''],
      description: ['']
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServicesDetailPage');
    this.createLoadingController();
    this.getDetails();
  }

  async getDetails(){
    this.loading.present();
    await this.addServiceProvider.getById(this.id, this.vehicle).subscribe(
      (res) => {
        this.details = res[0];
        this.time = this.details.transferTime;
        console.log(res);
        this.loading.dismiss();
      },
      (error)=> console.log(error)
    );
  }

  closeModal() {
    this.viewController.dismiss();
  }

  modifyService(formValues: any) {
    console.log("MODIFICACIÓN");
    this.addServiceProvider.modifyById(this.id, formValues.name, formValues.destiny,
      formValues.origin, formValues.seats, formValues.company, formValues.directionCompany,
      formValues.transferDate, formValues.transferTime, formValues.description, this.vehicle).subscribe(
      (res: any) => {
        console.log(res);
        this.closeModal();
      }, error => console.log(error)
    );
  }

  private createLoadingController(){
    this.loading = this.loadingController.create({
      content:'Cargando...',
      spinner:'dots'
    })
  }

}
