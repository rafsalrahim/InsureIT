import { Component, OnInit } from '@angular/core';
import { SawtoothService } from '../sawtooth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  cusers=[];
  clickMessage="";
  servicedata="";
  baseUrl="http://localhost:3000";
  id='3Z7311';
  frm='THIRUVANANTHAPURAM';
  to="KOCHI"
  Table;
  Table2;
  number;
  time;
  amt;
  status;
  public visible=false;
  public visible2=false;
  cancelled;
  delayed;
  deviated;

  constructor(private Form:SawtoothService,private httpClient: HttpClient) { 
    console.log("Inside page component.ts")
  }
  ngOnInit() {
   
  }
  
  public get_products(from:string,to:string){

    //this.httpClient.get(this.baseUrl + '/flights?iataNumber='+this.id).subscribe((res)=>{
      this.httpClient.get(this.baseUrl + '/flights?from='+from+'&to='+to+'&status=Scheduled').subscribe((res)=>{  
      console.log(res);
        console.log("hello");
        this.visible=true;
          this.Table=res;
        console.log(this.baseUrl + '/flights?from='+from+'&to='+to+'&status=Scheduled');
    });
}
    public selectflight(i){
      //var index = i[2];
      this.number=i.number;
      this.time=i.time;
      this.status=i.status;
      console.log(this.status);
      this.visible=false;
      
    }

    public get_reward(amt:string){
          console.log("hello");
          this.visible2=true;
          this.amt=Number(amt);
          this.cancelled=this.amt*5;
          this.delayed=this.amt*7;
          this.deviated=this.amt*7;
          this.Table2=[{"ab":this.cancelled,"ac":this.delayed,"ad":this.deviated}];
  }

  async addInsurance(from:string,to:string,amt:string,date:string,Name:string){
   // event.preventDefault();
    console.log(amt)
   //this.clickMessage="Gender: "+Gender + " Registration Date:"+date + " Name:" +Name ;
    const proc ="NHS"
    const action ="add"
    const FAMILYNAME = 'insureIT'
    const servDt =await this.Form.sendData(from,to,amt,Name,this.number,this.status,proc,action,FAMILYNAME);
    this.servicedata="htis is service dAatta"+servDt;
    //+servDt.toString();
    
  }

}