import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

type Image = {
  imageURL: string
}

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  images: Image[] | undefined;

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.httpClient.get<Image[]>("https://api.rtmc.macesandrei.com/images").subscribe({
      next: (response: Image[]) => {
        this.images = response;
        console.log(response)
      }
    })
  }
}
