import { Component, OnInit } from '@angular/core';
import { SawtoothService } from '../sawtooth.service';

import {Buffer} from 'buffer/';

@Component({
  selector: 'app-eventsbar',
  templateUrl: './eventsbar.component.html',
  styleUrls: ['./eventsbar.component.css']
})
export class EventsbarComponent implements OnInit {


  users=[];donr=[];recp=[];recpList=[];donrList=[];
  clickMessage="";
  servicedata="";
  addrArray;state;address;
  
  stateDt;  detailsList;forRecp;
  name;dob;btype;otype;idno;gender;proc;

  constructor(private Form:SawtoothService) { 
    
    const nhs="NHS"
   
  }

  ngOnInit() {
  }

  getList(){
    return this.Form.getStateD(this.Form.address)
    .subscribe((resp)=>{
      const dataString= JSON.stringify(resp)
      const data= JSON.parse(dataString)
      let stateDataEnc=data.data;
      let stateDecoded= atob(stateDataEnc)
      this.state=JSON.parse(stateDecoded)
      this.addrArray=this.state.address
    

        for (var i in this.addrArray ){
              this.getData(this.addrArray[i])
              
        }
    })

      }



     

  getDecodedData(responseJSON): string {
    const dataBytes = responseJSON.data;
    const decodedData = new Buffer(dataBytes, 'base64').toString();
    return decodedData;
  }

  

  getData(addr){
    
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
            proc:Details[5],
            action:Details[6],
            addr:addr
            //status:this.state.Status,
            //txnid:this.state.Txnid
          }
/*
          if(addr.substr(0,22)==this.Form.hash("insureIT").substr(0,6)+this.Form.hash("resp").substr(0,16)){
            console.log(addr,"KJADIHEGFFFFGWwhfgwHU")
            this.recp.push(this.detailsList)
          }
          else if(addr.substr(0,22)==this.Form.hash("hygieia").substr(0,6)+this.Form.hash("NHS").substr(0,16)){
            console.log(addr,"ewfg")
            this.donr.push(this.detailsList)
          }
         else{
           console.log("Error in detail List")
         }*/
         console.log(this.detailsList);
          console.log("Name is "+this.stateDt)

          console.log("batchlist null",this.stateDt);
          
        })
       
        
      },
      (error)=>{
        console.log(error)

      })
  }

}
