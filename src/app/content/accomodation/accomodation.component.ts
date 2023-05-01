import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accomodation',
  templateUrl: './accomodation.component.html',
  styleUrls: ['./accomodation.component.scss']
})
export class AccomodationComponent implements OnInit {
  htmlResponse = "";
  
  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void
  {
    this.httpClient.get("https://api.rtmc.macesandrei.com/accomodation", {responseType: "text"}).subscribe({
      next: (response: string) => {
        this.htmlResponse = response;
      }
    })
  }
}
