import { Component, OnInit } from '@angular/core';
import { StorageService } from '../_services/storage.service';
import { HttpClient } from '@angular/common/http';

import * as nodemailer from 'nodemailer';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent  implements OnInit {
  userboard:false;
  adminboard:false;
  currentUser: any;
  email:any;
  reservationcd:string;

  constructor(private storageService: StorageService,private http:HttpClient) { }

  ngOnInit(): void {
    this.currentUser = this.storageService.getUser();
    this.email=this.currentUser.email;
    console.log(this.email);
    this.adminboard =this.currentUser.roles.includes('ROLE_ADMIN');

      this.userboard =this.currentUser.roles.includes('ROLE_USER');

  }
  getReservationCode(): void {
    // Make an HTTP request to your backend API endpoint
    const encodedEmail = encodeURIComponent(this.email.toString());
    const url = `http://localhost:8097/public/${encodedEmail}`;
    this.http.get(url, { responseType: 'text' }).subscribe(data =>{
      this.reservationcd=data;
      console.log(this.reservationcd);

    })

  }

  sendEmail() {
    const variableData = 'Some variable data';

    this.http.post('/send-email', variableData).subscribe(() => {
        console.log('Email sent successfully');
    }, (error) => {
        console.error('Error sending email', error);
    });
}
}
