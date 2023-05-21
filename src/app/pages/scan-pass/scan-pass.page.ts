import { Component, ViewChild } from '@angular/core';
import { IonInput, LoadingController } from '@ionic/angular';
import { createWorker } from "tesseract.js";
import {CameraResultType, CameraSource,Camera} from "@capacitor/camera";
import { Capacitor } from '@capacitor/core';
import { ImageCroppedEvent,ImageCropperComponent,LoadedImage } from "ngx-image-cropper";
import { Client } from "../../client";
import { ClientService } from 'src/app/client.service';
import { ActionSheetController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from "@angular/common";
import { Router } from '@angular/router';
import { AlertController  } from "@ionic/angular";


@Component({
  selector: 'app-scan-pass',
  templateUrl: './scan-pass.page.html',
  styleUrls: ['./scan-pass.page.scss'],
})
export class ScanPassPage {

client: Client = new Client();
 //for select the face photo
 @ViewChild('cropper') cropper: ImageCropperComponent;
 myImage:any | null ;
 croppedImage:any="";
 isMobile = Capacitor.getPlatform() !== 'web';

selectedFile:any;


  firstlinemrz:any;
  lastlinemrz:any;
  codemrz:any;
  datetest:any;
  typepassport:any;
  name:any;
  lastname:any;
  nationality:any;
  gender:any;
  date_expiry:any;
  birth_date:any;
  personal_number:any;
  passport_number:any;
  image64:any;
  worker:Tesseract.Worker;
  workerReady = false;
  image = '';
  ocrResult='';
  captureProgress=0;
  imageUrl: any;
  imageblob:any;



  constructor(private alertcontroller:AlertController,private router:Router,private datepipe:DatePipe,
    private http:HttpClient,private loadingCtrl: LoadingController,private clientservice:ClientService,
    private actionSheetController: ActionSheetController){
    this.loadWorker();
  }

//convertToImage(){
//this.imageUrl = this.image64;
//}
  async loadWorker(){
    this.worker= await createWorker({

          logger:progress => {
          console.log(progress);
          if (progress.status == 'recognizing text') {
            this.captureProgress= parseInt(''+ progress.progress*100);
          }
        }
      });
      await this.worker.load();
      await this.worker.loadLanguage('eng');
      await this.worker.initialize('eng');
      this.workerReady=true;

    }
reload(){
  location.reload();
}








    async RecognizeImage(){
      const result = await this.worker.recognize(this.image)
      console.log(result);
      const lenlines=result.data.lines.length;
      this.ocrResult = result.data.text;




      // get the last 2 lines for mrz code
      this.firstlinemrz=result.data.lines[lenlines-2].text;
      this.lastlinemrz=result.data.lines[lenlines-1].text;
      this.codemrz= this.firstlinemrz+'\n'+this.lastlinemrz;
      console.log(this.codemrz);
      // get mrz split

      const splitfirstline=this.firstlinemrz.split('<');
      const splitlastline=this.lastlinemrz.split('<');
      console.log(splitfirstline);
      console.log(splitlastline);
  //split tester

     //set up the values
      if (splitfirstline[2].length==1) {

        this.lastname = splitfirstline[3]+' '+splitfirstline[4];
      }
      else{
          this.lastname=splitfirstline[2];
      }

      this.typepassport=splitfirstline[0].substring(0,1);
      this.name=splitfirstline[1].substring(3);
      this.passport_number=splitlastline[0];
      this.nationality=splitlastline[1].substring(1,4);

      this.datetest=splitlastline[1].substring(4,6)+splitlastline[1].substring(6,8)+splitlastline[1].substring(8,10);
      if (this.datetest.substring(0,2)>=40) {
        this.birth_date="19"+splitlastline[1].substring(4,6)+'-'+splitlastline[1].substring(6,8)+'-'+splitlastline[1].substring(8,10);
      }else{
        this.birth_date="20"+splitlastline[1].substring(4,6)+'-'+splitlastline[1].substring(6,8)+'-'+splitlastline[1].substring(8,10);
      }

      this.gender=splitlastline[1].substring(11,12);
      this.personal_number=splitlastline[1].substring(18,27);
      this.date_expiry=splitlastline[1].substring(12,14)+'-'+splitlastline[1].substring(14,16)+'-'+splitlastline[1].substring(16,18);
      this.image64=this.image;
      // const contentType = 'image/png';
       //const binaryData = atob(this.image64.split(',')[1]);
       //const arrayBuffer = new ArrayBuffer(binaryData.length);
       //const uint8Array = new Uint8Array(arrayBuffer);
          // for (let i = 0; i < binaryData.length; i++) {
             //        uint8Array[i] = binaryData.charCodeAt(i);
               //}
       //this.imageblob = new Blob([arrayBuffer], { type: contentType });
      // tester on the console and the lines

      console.log(this.typepassport);
      console.log(this.name);
      console.log(this.lastname);
      console.log(this.nationality);
      console.log(this.passport_number);
      console.log(this.gender);
      console.log(this.birth_date);
      console.log(this.date_expiry);
      console.log(this.image64.substring(0,20));

       //console.log(arrayBuffer);
       //console.log(contentType);
       //console.log(this.imageblob)
           //this.convertToImage();

    }


    // for the face photo

    async saveclient() {
      let nameInput1 = <HTMLInputElement>document.getElementById('name');
      let nameInput2 = <HTMLInputElement>document.getElementById('lastName');
      let nameInput3 = <HTMLInputElement>document.getElementById('passport_Type');
      let nameInput4 = <HTMLInputElement>document.getElementById('nationality');
      let nameInput5 = <HTMLInputElement>document.getElementById('gender');
      let nameInput6 = <HTMLInputElement>document.getElementById('birth_date');
      let nameInput7 = <HTMLInputElement>document.getElementById('personal_Number');
      let nameInput8 = <HTMLInputElement>document.getElementById('passport_Number');


        if (nameInput1 && nameInput1.value === '' ||
        nameInput2 && nameInput2.value === '' ||
        nameInput3 && nameInput3.value === '' ||
        nameInput4 && nameInput4.value === '' ||
        nameInput5 && nameInput5.value === '' ||
        nameInput6 && nameInput6.value === '' ||
        nameInput7 && nameInput7.value === '' ||
        nameInput8 && nameInput8.value === ''
      ){

        this.errorAlert();


        }else{
          this.clientservice.addclientj(this.client).subscribe(data => {
            console.log(data);
            this.Alert();
          });
        }


    }

    async Alert() {
      const alert = await this.alertcontroller.create({
        header: 'Success',
        message: 'client added succesfully',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel'
          },
          {
            text: 'OK',
            handler: () => {
              this.gotoreservationcd();
            }
          }
        ]
      });
      await alert.present();
    }
    async errorAlert() {
      const alert = await this.alertcontroller.create({
        header: 'Error',
        message: 'something went wrong! Check your information again please',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel'
          },
          {
            text: 'OK',
            handler: () => {
              this.gotoreservationcd();
            }
          }
        ]
      });
      await alert.present();
    }


gotoreservationcd(){
  this.router.navigate(['/public/reservation-cd']);
     }

      imageLoaded(){
        this.loadingCtrl.dismiss();
      }

      loadImageFailed(){
        console.log('image load failed!');
      }
      cropImage(){
      this.croppedImage= this.cropper.crop()?.base64;
      this.myImage = null;
      }



      async captureImages(){
        const actionSheet = await this.actionSheetController.create({
          header: 'Select image source',
          buttons: [
            {
              text: 'Load from Library',
              handler: async () => {
                const image = await Camera.getPhoto({
                  quality: 90,
                  resultType:CameraResultType.DataUrl,

                  source:CameraSource.Photos,
                  allowEditing:true

                });
                this.image = image.dataUrl!;
              }
            },
            {
              text: 'Use Camera',
              handler: async () => {
                const image = await Camera.getPhoto({
                  quality: 90,
                  resultType:CameraResultType.DataUrl,

                  source:CameraSource.Camera,
                  allowEditing:true

                });
                this.image = image.dataUrl!;
              }

            },
            {
              text: 'Cancel',
              role: 'cancel'
            }

          ]
        });

        await actionSheet.present();


    }


  inputModel = '';
  @ViewChild('ionInputEl', { static: true }) ionInputEl!: IonInput;



}
