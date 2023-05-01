import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

type Member = {
  name: string,
  information: string
}

@Component({
  selector: 'app-comitee',
  templateUrl: './comitee.component.html',
  styleUrls: ['./comitee.component.scss']
})
export class ComiteeComponent implements OnInit {

  members: Member[] | undefined;

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.httpClient.get<Member[]>("https://api.rtmc.macesandrei.com/comitee").subscribe({
      next: (response: Member[]) => {
        this.members = response;
      }
    })
  }
}
