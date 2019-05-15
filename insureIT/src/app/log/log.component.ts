import { Component, OnInit } from '@angular/core';
import { SawtoothService } from '../sawtooth.service';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {

  public visible2=false;
  recp=[];detailsList;
  constructor(private Form:SawtoothService) { this.logdat();}

  ngOnInit() {
  }
  logdat(){
    this.visible2=true;
    this.detailsList=  this.Form.logdata_list();
    this.recp.push(this.detailsList)
  }
}
