import { Component, OnInit }  from '@angular/core';
import { SawtoothService } from '../sawtooth.service';


@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  
  users=[];
  clickMessage="";
  servicedata="";
  

  constructor(private Form:SawtoothService) { 
    console.log("Inside page component.ts")
  }
  ngOnInit() {
   
  }

  async addForm(Gender:string,idproof:string,date:string,Name:string){
   // event.preventDefault();
 
   this.clickMessage="Gender: "+Gender + " Registration Date:"+date + " Name:" +Name ;
    const proc ="NHS"
    const action ="add"
    const FAMILYNAME = 'insureIT'
    const servDt =await this.Form.sendData(Gender,idproof,date,Name,proc,action,FAMILYNAME);
    
    this.servicedata="htis is service dAatta"+servDt;
    //+servDt.toString();
    
  }
  
}
