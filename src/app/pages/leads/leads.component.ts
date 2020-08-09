import {Component, OnInit, Input } from '@angular/core';

// changes starts on 29thjuly2020
//import {freeApiService} from '../../shared/freeapi.service';
// import { Router } from '@angular/router';
// changes ends on 29thjuly2020
import { HttpClient} from '@angular/common/http';

import{LeadsDropdown} from '../../shared/albums';
// changes starts on 05aug2020
import{Leadssubmit} from '../../shared/albums';
import { freeApiService } from 'app/shared/freeapi.service';
// changes ends on 05aug2020


@Component({
selector:"leads-cmp",
templateUrl:"leads.component.html",
moduleId: module.id,

})

// export class LeadsComponent{

// constructor(private _freeApiService: freeApiService)
// {

// }
// lstAlbums:Albums[];
// ngOnInit(){

//     this._freeApiService.getAlbums()
//     .subscribe
//     (
//         data=>
//         {
//             this.lstAlbums=data;
//         }
//     )
// }

// }
export class LeadsComponent {
    // Define API
    apiURL = 'http://localhost:3000';

    leadsDropDownList: LeadsDropdown=null ;
    
    constructor(private http: HttpClient, private rs : freeApiService) { }

    // changes starts on 05aug2020
    columns=["Vehicle_No","Client_Name", "Concern_Name", "Client_ID", "Vehicle_Type", "Vehicle_Category", "Bank_Name", "Location", "Fees_Type", "Coordinator_ID", 
        "Request_ID", "Customer_Name", "Phone_Number", "Executive_Name", "Executive_Phone_number", "Report_Prepared_in", "Payment_Status",
        "RC_status", "Insurance_Status", "Date_of_insurance_Expiry"];
    index=["Vehicle_No","Client_Name", "Concern_Name","Client_ID", "Vehicle_Type", "Vehicle_Category", "Bank_Name", "Location", "Fees_Type", "Coordinator_ID", 
    "Request_ID", "Customer_Name", "Phone_Number", "Executive_Name", "Executive_Phone_number", "Report_Prepared_in", "Payment_Status",
    "RC_status", "Insurance_Status", "Date_of_insurance_Expiry"];
    users : Leadssubmit[]=[];
    
    // changes ends on 05aug2020

    ngOnInit() {
        this.fetchLeadsDropdown_DataSource();
        //console.log(this.leadsDropDownList);
        // changes starts on 05aug2020
        this.rs.getUsers().subscribe
        (
        (response)=>
        {this.users=response;
        },
        (error)=>console.log(error)
        )
        
        // changes ends on 05aug2020
    }

    
    onSubmit(data)
    {
        this.http.post('http://localhost:3000/api/leads/CreateMany',data)
        .subscribe((result)=>{
            console.warn("result",result)
        })
    console.warn(data);
    }

    private fetchLeadsDropdown_DataSource() {
        this.http
            .get<{ [key: string]: LeadsDropdown }>("http://localhost:3000/api/masterdropdown/getAllDropdowns")
            .subscribe(resData => {
               // console.log(resData[0]);
                this.leadsDropDownList = resData[0];
                console.log(this.leadsDropDownList.Vehicle_Type);
            });
    }
    

 }

// changes starts on 29thjuly2020
// export class LeadComponent implements OnInit {

    // @Input() leadDetails = { name: '', email: '', phone: 0 }
    // @Input() leadDetails = { 
    //     Vehicle_No: '',
    //     Client_Name: '',
    //     Concern_Name: '',
    //     Client_ID: '',
        // Vehicle_Type: '',
        // Vehicle_Category: '',
        // Bank_Name: '',
        // Location: '',
        // Fees_Type: '',
//         Coordinator_ID: '',
//         Request_ID: '',
//         Customer_Name: '',
//         Phone_Number: '',
//         Executive_Name: '',
//         Executive_Phone_number: '',    
//         Report_Prepared_in: '',
//         Payment_Status: '',
//         RC_status: '',
//         Insurance_Status: '',
//         Date_of_insurance_Expiry: ''
//     }
//     // constructor(
//     //   public freeapi: freeApiService
//     // ) { }
  
//     // ngOnInit() { }
  
//     addLead(dataLead) {
//       this.freeapi.createLeads(this.leadDetails).subscribe((data: {}) => {
        
//       })
//     }
  
// }
  // changes ends on 29thjuly2020