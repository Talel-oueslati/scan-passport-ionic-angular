import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reservation } from './reservation';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private baseURL="http://localhost:8097/public/reservationlist";
  private baseURL2="http://localhost:8097/public/getreservations";
  private baseURL1="http://192.168.1.16:8097/api/reservationlist";

  constructor(private httpclient:HttpClient) { }

  getreseravtions():Observable<any>{

    return this.httpclient.get<Reservation[]>(`${this.baseURL}`);
  }
  getreseravtionsj():Observable<any>{

    return this.httpclient.get<Reservation[]>(`${this.baseURL2}`);
  }

}
