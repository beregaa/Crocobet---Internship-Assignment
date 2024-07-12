import { NgFor } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [NgFor, HttpClientModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css',
})
export class PostsComponent {
  constructor(private httpClient: HttpClient) {}
  data: any = [];

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.httpClient
      .get('https://jsonplaceholder.typicode.com/posts')
      .subscribe((data: any) => {
        (this.data = data), console.log(data);
      });
  }
}
