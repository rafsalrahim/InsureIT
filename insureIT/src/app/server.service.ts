import { Injectable } from '@angular/core';
import { Contact } from './contact';
import { HttpClient,HttpErrorResponse,HttpHeaders} from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  ServerUrl='http://localhost/dev/';
  errorData: {};

  httpOptions={
    headers:new HttpHeaders({'Content-Type':'application/json'})
  };

  constructor(private http:HttpClient) { }

  getPage(formdata: Contact){
    return this.http.post<Contact>(this.ServerUrl+'api/contact',formdata,this.httpOptions);
    //.pipe(catchError(this.handleError));
  }

  private handleError(error:HttpErrorResponse)
  {
    if(error.error instanceof ErrorEvent){
      console.error('An error occurred:',error.error.message);
    }else{

    }
  }
}
