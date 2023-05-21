import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Client } from 'src/app/client';
import { ClientService } from 'src/app/client.service';

@Component({
  selector: 'app-getclients',
  templateUrl: './getclients.page.html',
  styleUrls: ['./getclients.page.scss'],
})
export class GetclientsPage implements OnInit {

  id: number;
  nameDisplay:any;
 client: Client=new Client();

image64: string;

imageUrl: any;
  constructor(private alertcontroller:AlertController,private router: Router,private route:ActivatedRoute,
    private clientservice:ClientService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.clientservice.getclientbyid(this.id).subscribe(data => {
      this.client=data;
      this.image64=this.client.image64;
      this.convertToImage();
    })


  }

convertToImage() {

  this.imageUrl = this.image64;

  }

isValidString() {

  return this.image64 && this.image64.length > 0;

  }

isValidImage() {

  return this.imageUrl && this.imageUrl.length > 0;

  }














  onSubmit(){
    this.clientservice.updateclient(this.id,this.client).subscribe(data =>{
      this.Alert();


    })

  }
  async Alert() {
    const alert = await this.alertcontroller.create({
      header: ' Succeded',
      message: 'client updated succesfully',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'OK',
          handler: () => {
            this.gotoclientlist();
          }
        }
      ]
    });
    await alert.present();
  }

gotoclientlist(){
  this.router.navigate(['/clients']);
     }

  getclient(){
    this.clientservice.getclient().subscribe( data =>{
      this.client= data;
      console.log(this.client);

    });
}
}
