import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Client } from './client';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ClientService {
private baseURL="http://localhost:8097/public/addclient"
private baseURL2="http://localhost:8097/public/getclient"
private baseURL3="http://localhost:8097/public/addclientj"
private localurl3="http://192.168.1.16:8097/public/addclientj"
private clients="http://localhost:8097/public/clients"
private localurl="http://192.168.1.16:8097/public/addclient"
private base1="http://localhost:8097/public/ClientsF"
private base2="http://localhost:8097/public/ClientsM"
private base3="http://localhost:8097/public/findallp"
private base4="http://localhost:8097/public/findalld"
private base5="http://localhost:8097/public/findalls"
private base6="http://localhost:8097/public/oneclient"
private base7="http://localhost:8097/public/updateclient"
private base8="http://localhost:8097/public/Clientsnumber"
private base9="http://localhost:8097/public/deleteclient"



constructor(private httpclient:HttpClient) { }

deleteclient(id: number):Observable<any>{
  return this.httpclient.delete(`${this.base9}/${id}`);
}
getclientsnumber(): Observable<any>{
  return this.httpclient.get<any>(`${this.base8}`);
}
updateclient(id: number,client:Client):Observable<Object>{
  return this.httpclient.put(`${this.base7}/${id}`,client);
}
getclientbyid(id: number): Observable<Client> {
  return this.httpclient.get<Client>(`${this.base6}/${id}`);
}
getfemale(): Observable<any>{
  return this.httpclient.get<any>(`${this.base1}`);
}
getmale(): Observable<any>{
  return this.httpclient.get<any>(`${this.base2}`);
}
getallp(): Observable<any>{
  return this.httpclient.get<any>(`${this.base3}`);
}
getalld(): Observable<any>{
  return this.httpclient.get<any>(`${this.base4}`);
}
getalls(): Observable<any>{
  return this.httpclient.get<any>(`${this.base5}`);
}

 addclient(client:Client):Observable<any>{
  return this.httpclient.post(`${this.baseURL}`,client)
}
getclients(): Observable<Client[]>{
  return this.httpclient.get<Client[]>(`${this.clients}`);
}
addclientj(client:Client):Observable<any>{
  return this.httpclient.post(`${this.baseURL3}`,client)
}

getclient():Observable<any>{

  return this.httpclient.get<Client[]>(`${this.baseURL2}`);
}

saveImage(imageData: string) {
  const apiUrl = 'http://localhost:8097/api/save-image';
  const body = { image: imageData };

  return this.httpclient.post(apiUrl, body);
}
// Define a method to upload an image



}
