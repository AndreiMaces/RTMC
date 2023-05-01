import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
import { SanitizeUrlPipe } from 'src/app/pipes/sanitize-url.pipe';

type HomeResponse = {
  date: string,
  place: string,
  deadline: string,
  paragraphs: string[],
  imageURL: string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [SanitizeUrlPipe]
})
export class HomeComponent {
  content: HomeResponse | undefined;

  constructor(private httpClient: HttpClient, private sanitizeUrlPipe: SanitizeUrlPipe){}

  ngOnInit(): void 
  {
    this.httpClient.get<HomeResponse>("https://api.rtmc.macesandrei.com/home").subscribe({
      next: (response: HomeResponse) => {
        this.content = response;
      }
    })
  }
}
