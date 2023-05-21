import { Component, OnInit } from '@angular/core';
import { Client } from '../client';
import { ClientService } from '../client.service';
import {  Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-deletec',
  templateUrl: './deletec.page.html',
  styleUrls: ['./deletec.page.scss'],
})
export class DeletecPage implements OnInit {
  errorMessage:any;
  client:Client=new Client();
id:number;
  constructor(private clientservice:ClientService,private router:Router,private alertcontroller:AlertController) { }

  ngOnInit() {
  }
  supprimer(){
    this.clientservice.deleteclient(this.client.id).subscribe( data =>{
      console.log(data);
      this.Alert();
})
 }

 async Alert() {
  const alert = await this.alertcontroller.create({
    header: 'Success',
    message: 'client deleted succesfully',
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel'
      },
      {
        text: 'OK',
        handler: () => {
          this.gotoclientliste();
        }
      }
    ]
  });
  await alert.present();
}

 gotoclientliste(){
  this.router.navigate(['/clients']);
   }
   onSubmit(){

    console.log(this.client);
    let confirmaction=confirm("Are you sure you want to delete client number "+this.client.id+" ?");
    if(confirmaction){
      this.supprimer();
    }else{
      alert("client delete canceled");
    }

  }
  validateInput() {
    const inputEl = document.getElementById('message') as HTMLInputElement;
    const input = inputEl.value;

    if (!input) {
      this.errorMessage = 'Input is null!';
      return false;
    }



    this.errorMessage = '';
    return true;
  }



}
