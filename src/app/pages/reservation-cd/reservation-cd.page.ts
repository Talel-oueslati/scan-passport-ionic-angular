import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInput } from '@ionic/angular';
import { Reservation } from "../../reservation";
import { ReservationService } from 'src/app/reservation.service';
import { Router } from '@angular/router';
import { SqliteService } from'../../services/sqlite.service';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { AlertController  } from "@ionic/angular";
import { ToastController } from "@ionic/angular";

@Component({
  selector: 'app-reservation-cd',
  templateUrl: './reservation-cd.page.html',
  styleUrls: ['./reservation-cd.page.scss'],
})
export class ReservationCdPage implements OnInit {
  reservations: Reservation[];
  reserv: any[];
  errorMessage:any;
  constructor(private toast:ToastController,private alertcontroller:AlertController,private http: HttpClient, private sqliteService: SqliteService,private reservationservice:ReservationService,private router:Router) { }
  public reservationss: any[] = [];
  async ngOnInit() {

    this.getreservation();
    this.getDataFromAPI();
    this.reservationservice.getreseravtions();


    }

async getDataFromAPI(): Promise<void> {
  try {
    // Retrieve data from Spring Boot API
    const apiUrl = 'http://localhost:8097/public/reservationlist';
    const response$ = this.http.get<any[]>(apiUrl);

    const response = await firstValueFrom(response$);

    if (response !== undefined) {
      // Save data to SQLite database
      await this.sqliteService.createDatabase();
      for (const reservation of response) {
        await this.sqliteService.saveReservation(reservation);
      }

      // Retrieve data from SQLite database
      this.reservationss = await this.sqliteService.getReservations();
    }
  } catch (error) {
    console.log('Error getting data from API', error);
  }
}




showtoast(){
  this.toast.create({
    message:"code doesn't exist,Try again"
  })
}


   getreservation(){
    this.reservationservice.getreseravtionsj().subscribe( data =>{
      this.reservations= data;
      console.log(this.reservations);

    });

  }
  checkReservation() {
    const input = document.getElementById('message') as HTMLInputElement ;

    const value = input?.value;
    console.log(`Input value: ${value}`);


  }
  async ErrorAlert() {
    const alert = await this.alertcontroller.create({
      header: 'Error',
      message: 'Code does not exist. Please check your code.',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'OK',
          handler: () => {
            // Handle OK button click
          }
        }
      ]
    });
    await alert.present();
  }


  gotoscannpass(){
    this.router.navigate(['/scan-pass']);

  }
  validateInput() {
    const inputEl = document.getElementById('message') as HTMLInputElement;
    const input = inputEl.value;

    if (!input) {
      this.errorMessage = 'Input is null!';
      return false;
    }

    if (input.length !== 8) {
      this.errorMessage = 'Input is not 8 characters!';
      return false;
    }

    this.errorMessage = '';
    return true;
  }



   test(){
    const input = document.getElementById('message') as HTMLInputElement | null;
    const value = input?.value;
    this.validateInput();
    if (value && this.reservations.find((r) => r.reservationCode.toLowerCase() === value.toLowerCase())) {
      console.log("reservation_code is exist")
      this.gotoscannpass();
    } else {
      // Reservation code does not exist
      this.showtoast();
     this.ErrorAlert();
    }

  }

  inputModel = '';
  @ViewChild('ionInputEl', { static: true }) ionInputEl!: IonInput;

}
