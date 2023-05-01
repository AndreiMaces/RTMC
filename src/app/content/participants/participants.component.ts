import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

type Member = {
  name: string,
  information: string
}

@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.scss']
})
export class ParticipantsComponent implements OnInit {

  members: Member[] | undefined;

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.httpClient.get<Member[]>("https://api.rtmc.macesandrei.com/participants").subscribe({
      next: (response: Member[]) => {
        this.members = response;
      }
    })
  }
}
