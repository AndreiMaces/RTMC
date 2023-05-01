import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

type Member = {
  name: string,
  information: string
}

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.scss']
})
export class SpeakersComponent {

  members: Member[] | undefined;

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.httpClient.get<Member[]>("https://api.rtmc.macesandrei.com/speakers").subscribe({
      next: (response: Member[]) => {
        this.members = response;
      }
    })
  }
}
