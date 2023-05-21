import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Capacitor } from '@capacitor/core';
import { LoadingController } from '@ionic/angular';
import { ImageCroppedEvent,ImageCropperComponent,LoadedImage } from "ngx-image-cropper";

@Component({
  selector: 'app-ocr-image',
  templateUrl: './ocr-image.page.html',
  styleUrls: ['./ocr-image.page.scss'],
})
export class OcrImagePage  {
@ViewChild('cropper') cropper: ImageCropperComponent;
myImage:any | null ;
croppedImage:any="";
isMobile = Capacitor.getPlatform() !== 'web';

  constructor( private loadingCtrl: LoadingController,private http:HttpClient) { }

async selectImage(){
const image = await Camera.getPhoto({
  quality:90,
  allowEditing:true,
  resultType:CameraResultType.Base64,
});
const loading = await this.loadingCtrl.create();
await loading.present();

this.myImage = `data:image/jpeg;base64,${image.base64String}` ;
this.croppedImage = null;
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

async captureImage() {
  const image = await Camera.getPhoto({
      quality: 90,
      resultType: CameraResultType.Base64,
      source: CameraSource.Camera,
      allowEditing: true
  });
  const imageData = image.base64String;
  this.http.post('/api/images', imageData).subscribe(() => {
      // success
  }, () => {
      // error
  });
}
}
