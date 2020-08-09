// export class Albums {
//     userId: number;
//     id: number;
//     title: string;
// }

export interface LeadsDropdown {
    Vehicle_Type: any;
    Vehicle_Category: any;
    Bank_Name: any;
    Location: any;
    Fees_Type: any;
}

export class Leadssubmit{
    Vehicle_No: any;
    Client_Name: any;
    Concern_Name: any;
    Client_ID: any;
    Vehicle_Type: any;
    Vehicle_Category: any;
    Bank_Name: any;
    Location: any;
    Fees_Type: any;
    Coordinator_ID: any;
    Request_ID: any;
    Customer_Name: any;
    Phone_Number: any;
    Executive_Name: any;
    Executive_Phone_number: any;    
    Report_Prepared_in: any;
    Payment_Status: any;
    RC_status: any;
    Insurance_Status: any;
    Date_of_insurance_Expiry: any;
    constructor(Vehicle_No,Client_Name, Concern_Name, Client_ID, Vehicle_Type, Vehicle_Category, Bank_Name, Location, Fees_Type, Coordinator_ID, 
        Request_ID, Customer_Name, Phone_Number, Executive_Name, Executive_Phone_number, Report_Prepared_in, Payment_Status,
        RC_status, Insurance_Status, Date_of_insurance_Expiry )
    {
        this.Vehicle_No = Vehicle_No;
        this.Client_Name = Client_Name;
        this.Concern_Name = Concern_Name;
        this.Client_ID = Client_ID;
        this.Vehicle_Type = Vehicle_Type;
        this.Vehicle_Category = Vehicle_Category;
        this.Bank_Name = Bank_Name;
        this.Location = Location;
        this.Fees_Type = Fees_Type;
        this.Coordinator_ID = Coordinator_ID;
        this.Request_ID = Request_ID;
        this.Customer_Name = Customer_Name;
        this.Phone_Number = Phone_Number;
        this.Executive_Name = Executive_Name;
        this.Executive_Phone_number = Executive_Phone_number;
        this.Report_Prepared_in = Report_Prepared_in;
        this.Payment_Status = Payment_Status;
        this.RC_status = RC_status;
        this.Insurance_Status = Insurance_Status;
        this.Date_of_insurance_Expiry = Date_of_insurance_Expiry;
    }
}