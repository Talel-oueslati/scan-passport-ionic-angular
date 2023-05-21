import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import 'chartjs-plugin-annotation';

import Chart from 'chart.js/auto';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.scss'],
})
export class BoardAdminComponent  implements OnInit {
  females:any;
  clientsnumber:any;
  males:any;
  allp:any;
  alld:any;
  alls:any;
  constructor(private clientservice:ClientService
    ,private _http:HttpClient
    ,private router: Router) { }

  ngOnInit(): void {

    this.getmale();
    this.getallp();
    this.getalld();
    this.getfemale();
    this.getalls();
    this.getclientsunmber();
    this.getdate();



  }
  getdate(){
    const now= new Date();
    const diff=now.getTime();

  }
  getfemale(){
    this.clientservice.getfemale().subscribe(data =>{
  this.females=data;
  console.log(this.females);
  const myCharts= new Chart("myCharts", {
    type: 'doughnut',
    data: {
        labels: [ 'Females','Males'],
        datasets: [{
            label: 'gender numbers',
            data: [this.females,this.males],

            backgroundColor: [

              '#dc143c',
              '	#00ffff',


            ],

            borderColor: 'rgba(255, 255, 255, 1)',
            borderWidth: 0,


        }]
    },



  });

    })


  }
  getmale(){
    this.clientservice.getmale().subscribe(data =>{
  this.males=data;
  console.log(this.males);
    })


  }
  getalls(){
    this.clientservice.getalls().subscribe(data =>{
  this.alls=data;
  console.log(this.alls);
  const myChart= new Chart("myChart2", {
    type: 'line',
    data: {
      labels: [ '0','P','D', 'S','Types'],
      datasets: [{
          label: 'Passport Types Numbers',
          data: [0,this.allp,this.alld,this.alls,],
            backgroundColor: [
              '#FFFFFF',

              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',


            ],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            borderWidth: 1
        }]

    },


  });
    })



  }
  getalld(){
    this.clientservice.getalld().subscribe(data =>{
  this.alld=data;
  console.log(this.alld);
    })

  }
  getallp(){
    this.clientservice.getallp().subscribe(data =>{
  this.allp=data;
  console.log(this.allp);
    })

  }
  getclientsunmber(){
    this.clientservice.getclientsnumber().subscribe(data =>{
  this.clientsnumber=data;
  console.log(this.clientsnumber);
    })


  }

}
