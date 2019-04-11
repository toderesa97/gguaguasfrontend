import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, Platform} from 'ionic-angular';
import {AddTransfersPartsProvider} from "../../providers/add-transfers-parts/add-transfers-parts";
import {FileOpener} from "@ionic-native/file-opener/ngx";

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.vfs

/**
 * Generated class for the PartsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-parts',
  templateUrl: 'parts.html',
})
export class PartsPage {

  transferDate: string;
  transfers = [];

  letterObj = {
    to: '',
    from: '',
    text: ''
  }

  pdfObj = null;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public addTransfersPartsProvider: AddTransfersPartsProvider,
              private plt: Platform,
              private file: File,
              private fileOpener: FileOpener) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PartsPage');
  }

  selectTransferByDate() {
    console.log(this.transferDate);

    this.addTransfersPartsProvider.getByDate(this.transferDate).subscribe(
      (res: any) => {
        console.log(res);
        this.transfers = res;
      }, error => console.log(error)
    );
  }

  createPdf(){
    let docDefinition = {
      content: [
        { text: 'REMINDER', style: 'header' },
        { text: new Date().toTimeString(), alignment: 'right' },

        { text: 'From', style: 'subheader' },
        { text: this.letterObj.from },

        { text: 'To', style: 'subheader' },
        this.letterObj.to,

        { text: this.letterObj.text, style: 'story', margin: [0, 20, 0, 20] },

        {
          ul: [
            'Bacon',
            'Rips',
            'BBQ',
          ]
        }
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
        },
        subheader: {
          fontSize: 14,
          bold: true,
          margin: [0, 15, 0, 0]
        },
        story: {
          italic: true,
          alignment: 'center',
          width: '50%',
        }
      }
    }
    this.pdfObj = pdfMake.createPdf(docDefinition);
  }

  downloadPdf() {
    if (this.plt.is('cordova')){

    } else {
      this.pdfObj.download();
    }

  }
}
