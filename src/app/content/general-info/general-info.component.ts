import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-general-info',
  templateUrl: './general-info.component.html',
  styleUrls: ['./general-info.component.scss']
})
export class GeneralInfoComponent implements OnInit {
    htmlResponse = "";

    constructor(private httpClient: HttpClient) {}

    ngOnInit(): void
    {
      this.httpClient.get("https://api.rtmc.macesandrei.com/general-info", {responseType: "text"}).subscribe({
        next: (response: string) => {
          this.htmlResponse = response;
        }
      })
    }
}
