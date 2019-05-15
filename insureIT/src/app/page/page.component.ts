import { Component, OnInit }  from '@angular/core';
import { SawtoothService } from '../sawtooth.service';
import { Router } from "@angular/router";


//import { test } from './test'
//import  crypto from 'crypto-js';
//import * as crypto from 'crypto-js';

//declare function mailSent2(Gender,idproof,date,name,some,some2):any;

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  
  users=[];
  clickMessage="";
  servicedata="";
  public edited = false;


  constructor(private Form:SawtoothService,private router: Router) { 
    console.log("Inside page component.ts")
    
    //date: any = { date: {year: (new Date()).getFullYear(), month: (new Date()).getMonth() + 1, day: (new Date()).getDate()} };
    
  }
  ngOnInit() {
  
  }
  saveTodos(): void {
    //show box msg
    this.edited = true;
    //wait 3 Seconds and hide
    setTimeout(function() {
        this.edited = false;
        console.log(this.edited);
        this.router.navigate(['/about'])
    }.bind(this), 6000);
   } 


//async addForm(Gender:string,idproof:string,date:string,Name:string){
  async addForm2(firstname:string,lastname:string,Gender:string,idproof:string,date:string,email:string){
   // event.preventDefault();

   this.clickMessage="Name: "+firstname+" "+lastname+"Gender"+Gender+"idproof"+idproof+"date"+date+"Email"+email ;
    console.log(this.clickMessage)

    const proc ="NHS"
    const action ="add_data"
    const FAMILYNAME = 'insureIT'
    const some="null";
    const servDt =await this.Form.sendData2(Gender,idproof,date,firstname,lastname,email,proc,action,FAMILYNAME);
    //mailSent2(Gender,idproof,date,name,some,some2);
    if(servDt!=null){
      this.saveTodos();
    }
    console.log(servDt.toString());
    //this.servicedata="htis is service dAatta"+servDt;
    +servDt.toString();
    
  }
  
}
