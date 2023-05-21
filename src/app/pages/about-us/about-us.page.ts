import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.page.html',
  styleUrls: ['./about-us.page.scss'],
})
export class AboutUsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  openMap(latitude: number, longitude: number) {
    window.open(`geo:${latitude},${longitude}`, '_system');
  }
  callnumber(phonenumber:string){
    window.open(`tel:${phonenumber}`, '_system')
  }
  sendEmail(emailAddress: string, message: string) {
    window.open(`mailto:${emailAddress}?subject=My%20subject&body=${message}`, '_system');
  }

}
