import { Component, OnInit , ViewChild} from '@angular/core';
import { SawtoothService } from '../sawtooth.service';
import { HttpClient } from '@angular/common/http';
import {Buffer} from 'buffer/';

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
  errval=false;
  public visible=false;
  public visible2=false;
  cancelled;
  delayed;  
  public visible_val=false;
  deviated;state;stateDt;detailsList;
  today;month;year;endday;
  day;day2;


  constructor(private Form:SawtoothService,private httpClient: HttpClient) { 
    console.log("Inside page component.ts")
  }

  ngOnInit() {
    this.today = new Date(),
    this.day = this.today.getDate(),
    this.month = this.today.getMonth()+1, //January is 0
    this.year = this.today.getFullYear();
    this.day2=this.day+1;
         if(this.day<10){
                this.day='0'+this.day
            } 
        if(this.month<10){
            this.month='0'+this.month
        }
        if(this.day2<10){
          this.day2='0'+this.day2
        }

        this.today = this.year+'-'+this.month+'-'+this.day;
        this.endday= this.year+'-'+this.month+'-'+this.day2;
      console.log("Date"+this.today)
        document.getElementById("dates").setAttribute("min", this.today);
        document.getElementById("dates").setAttribute("value", this.today);
        document.getElementById("dates").setAttribute("max",this.endday);
  }
  @ViewChild('userid') idusr;


public getvalid(add){
  this.getData(add);
}
  getData(addr){
    this.errval=false;
    return this.Form.getStateD(addr)
      .subscribe((resp)=>{
        const dataString= JSON.stringify(resp)
        const data= JSON.parse(dataString)
        let stateDataEnc=data.data;
        let stateDecoded= atob(stateDataEnc)
        this.state=JSON.parse(stateDecoded)
        
        console.log("bkp 0")
        
        console.log("bkp 1")
        return this.Form.getTxnD(this.state.Txnid)
        .subscribe((response) => {
          
          const dt1=JSON.stringify(response)
          const dt2=JSON.parse(dt1)
          let dt3=dt2.data
          let dt4=dt3.payload
          this.stateDt=new Buffer(dt4,"base64").toString()
          let Details=this.stateDt.split(',')

          this.detailsList={
            from:Details[0],
            to:Details[1],
            amt:Details[2],
            name:Details[3],
            number:Details[4],
            status:Details[5],
            proc:Details[6],
            action:Details[7],
            addr:addr
          }
          if(Details[7]=="add_data"){
              console.log("exist")
              this.errval=true;
        }else{
          this.visible_val=true
          this.idusr.nativeElement.value="";
        }

          
        })
       
        
      },
      (error)=>{
        console.log(error)
        this.visible_val=true
        this.idusr.nativeElement.value="";

      })
  }

//}


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