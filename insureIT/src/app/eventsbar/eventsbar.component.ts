import { Component, OnInit } from '@angular/core';
import { SawtoothService } from '../sawtooth.service';

import {Buffer} from 'buffer/';
import { interval, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-eventsbar',
  templateUrl: './eventsbar.component.html',
  styleUrls: ['./eventsbar.component.css']
})
export class EventsbarComponent implements OnInit {

  Table2;
  baseUrl="http://localhost:3000";
  users=[];clames_addr=[];recp=[];recpList=[];donrList=[];
  clickMessage="";
  servicedata="";
  addrArray;state;address;
  public visible2=false;
  stateDt;  detailsList;forRecp;
  amt;newstatus;Table;
  name;dob;btype;otype;idno;gender;proc;
  subscription: Subscription;

  constructor(private Form:SawtoothService,private httpClient: HttpClient) { 
    
    const nhs="NHS"
    setInterval(()=> { this.getList_rep() }, 60000);

   
  }

  ngOnInit() {
    this.getList();
  }

  getList(){
    //if(){
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
            status:Details[5],
            proc:Details[6],
            action:Details[7],
            addr:addr
            //status:this.state.Status,
            //txnid:this.state.Txnid
          }
          if(Details[7]=="add"){
          this.visible2=true;
          this.recp.push(this.detailsList)
        
        }
    //this.Table2=this.detailsList;

          /*if(addr.substr(0,22)==this.Form.hash("insureIT").substr(0,6)+this.Form.hash("resp").substr(0,16)){
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

  getData_claim(addr){
    
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
            //status:this.state.Status,
            //txnid:this.state.Txnid
          }
          if(Details[7]=="pol_claimed"){
          this.visible2=true;
          this.recp.push(this.detailsList)
        
        }
    //this.Table2=this.detailsList;

          /*if(addr.substr(0,22)==this.Form.hash("insureIT").substr(0,6)+this.Form.hash("resp").substr(0,16)){
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




  //Observable.interval(10000).takeWhile(() => true).subscribe(() => this.getList_rep());
  getList_rep1(){
    console.log("inside repeat call 2");
  }

  getList_rep(){
    //if(){
      console.log("inside repeat call getList_rep");
    return this.Form.getStateD(this.Form.address)
    .subscribe((resp)=>{
      const dataString= JSON.stringify(resp)
      const data= JSON.parse(dataString)
      let stateDataEnc=data.data;
      let stateDecoded= atob(stateDataEnc)
      this.state=JSON.parse(stateDecoded)
      this.addrArray=this.state.address
    //console.log("inside repeat call ");
        for (var i in this.addrArray ){
              this.getData_repet(this.addrArray[i])
              //console.log(this.addrArray[i]);
              
        }

    })

    }

  getData_repet(addr){
    
    return this.Form.getStateD(addr)
      .subscribe((resp)=>{
        const dataString= JSON.stringify(resp)
        const data= JSON.parse(dataString)
        let stateDataEnc=data.data;
        let stateDecoded= atob(stateDataEnc)
        this.state=JSON.parse(stateDecoded)
        
        //console.log("bkp 0")
        
        //console.log("bkp 1")
        return this.Form.getTxnD(this.state.Txnid)
        .subscribe((response) => {
          
          const dt1=JSON.stringify(response)
          const dt2=JSON.parse(dt1)
          let dt3=dt2.data
          let dt4=dt3.payload
          this.stateDt=new Buffer(dt4,"base64").toString()
          let Details=this.stateDt.split(',')
          console.log("inside if(Details[7]=='Delayed')"+Details[4]);
          this.httpClient.get('http://localhost:3000/flights?number='+Details[4]).subscribe((res)=>{  
            //console.log(res[0].altitude);
                //this.Table=res[0].status;
                console.log(res[0].status+"here is me");
              //console.log(this.baseUrl + '/flights?from='+from+'&to='+to+'&status=Scheduled');
          
        if(res[0].status==='Delayed')//here place the block creation code
          {
            console.log("Delayed")

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
                  //status:this.state.Status,
                  //txnid:this.state.Txnid
                }
                
                this.amt=Details[2]*5;
                this.newstatus="Done";
                const proc ="NHS"
                const action ="pol_claimed"
                const FAMILYNAME = 'insureIT'
                const servDt = this.Form.sendData(Details[0],Details[1],this.amt,Details[3],Details[4],this.newstatus,proc,action,FAMILYNAME);
                this.servicedata="htis is service dAatta"+servDt;
                //this.visible2=true;
                this.recp.push(this.detailsList)
                //this.Table2=this.detailsList;

                //if(addr.substr(0,22)==this.Form.hash("insureIT").substr(0,6)+this.Form.hash("resp").substr(0,16)){
                  console.log("way out to match handler"+addr)
                  this.clames_addr.push(this.detailsList) 
                  //this.match(this.detailsList)
                //}
                /*else if(addr.substr(0,22)==this.Form.hash("hygieia").substr(0,6)+this.Form.hash("NHS").substr(0,16)){
                  console.log(addr,"ewfg")
                  this.donr.push(this.detailsList)
                }
              else{
                console.log("Error in detail List")
              }*/
              //console.log(this.detailsList);
                //console.log("Name is "+this.stateDt)

                //console.log("batchlist null",this.stateDt);
                this.match(addr);
              
              
              }});
        })
       
        
      },
      (error)=>{
        console.log(error)

      })
  }

  match(recpaddr){

    console.log("Inside match class "+ recpaddr)
    let action = "modify"
    console.log(recpaddr+action)
    const FAMILYNAME = 'clamed'
    const servDt =this.Form.matchadr(recpaddr,action,FAMILYNAME);
    console.log(servDt+"inside match handler its ok")
  }

}
