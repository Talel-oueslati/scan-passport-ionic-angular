import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { Client } from '../client';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent  implements OnInit {
  clients: Client[];
  id:any;
  constructor(private clientservice:ClientService,private router:Router) { }

  ngOnInit() {
    this.getcclient();

  }


  private getcclient(){
    this.clientservice.getclients().subscribe( data => {
    this.clients= data;
    console.log(this.clients)
    });
    }
    printer(){
      window.print();
    }

  Search(){
    if(this.id!=""){
      this.clients=this.clients.filter(res=>{
        return res.id.toLocaleString().match(this.id.toLocaleLowerCase());
      });
    } else if(this.id== ""){
  this.ngOnInit();
    }



  }
  seemore(id: number){
    this.router.navigate(['getclients',id]);

  }
  key: String ='id';
  reverse:boolean=false;
  sort(key: String){
    this.key=key;
    this.reverse= !this.reverse;
  }
}
