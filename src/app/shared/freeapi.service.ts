import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
//import { retry, catchError } from 'rxjs/operators';

// changes starts on 29thjuly2020
import { Leadssubmit } from './albums';


// changes ends on  29thjuly2020
@Injectable(
    {
        providedIn: 'root'
    }
)
export class freeApiService
{
    // // changes starts on 05aug2020
    
    constructor(private http : HttpClient) { }
    url : string = "http://localhost:3000/api/leads/getLeads/"
    getUsers()
    {
      return this.http.get<Leadssubmit[]>(this.url);
    } 

    // changes ends on  05aug2020
}