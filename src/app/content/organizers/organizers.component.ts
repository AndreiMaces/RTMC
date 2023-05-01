import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

type Organizer = {
  name: string,
  information: string,
  faculty: string,
  address: string,
  email: string
}

@Component({
  selector: 'app-organizers',
  templateUrl: './organizers.component.html',
  styleUrls: ['./organizers.component.scss'],
})
export class OrganizersComponent implements OnInit {
  organizers: Organizer[] | undefined;

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void
  {
    this.httpClient.get<Organizer[]>("https://api.rtmc.macesandrei.com/organizers").subscribe(
      {
        next: (response: Organizer[]) => {
          this.organizers = response;
        }
      }
    );
  }
}
