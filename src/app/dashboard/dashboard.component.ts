import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  countryName:String=''
  countryDetails:any
  constructor(private http: HttpClient) {}



  fetchCountryDetails(){
    this.http.get<any>(`https://restcountries.com/v3.1/name/${this.countryName}?fullText=true`).subscribe(data=>{
      this.countryDetails=Object.values(data)
      console.log(this.countryDetails);
    })


  }
}
