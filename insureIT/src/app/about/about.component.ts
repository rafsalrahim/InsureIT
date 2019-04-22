import { Component, OnInit } from '@angular/core';
import { SawtoothService } from '../sawtooth.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  users=[];
  clickMessage="";
  servicedata="";
  

  constructor(private Form:SawtoothService) { 
    console.log("Inside page component.ts")
  }

  ngOnInit() {
   
  }

  async addInsurance(Gender:string,from:string,to:string,amt:string,date:string,Name:string){
   // event.preventDefault();
 
   //this.clickMessage="Gender: "+Gender + " Registration Date:"+date + " Name:" +Name ;
    const proc ="INS"
    const action ="insured"
    const FAMILYNAME = 'datainsure'
    const servDt =await this.Form.insure(from,to,amt,Name,proc,action,FAMILYNAME);
    
    this.servicedata="htis is service dAatta"+servDt;
    //+servDt.toString();
    
  }

}
