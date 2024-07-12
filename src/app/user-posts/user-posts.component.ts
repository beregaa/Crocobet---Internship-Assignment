import { NgFor } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, NgModule, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-posts',
  standalone: true,
  imports: [HttpClientModule, NgFor],
  templateUrl: './user-posts.component.html',
  styleUrl: './user-posts.component.css',
})
export class UserPostsComponent implements OnInit {
  constructor(private httpClient: HttpClient, private route: ActivatedRoute) {}
  data: any = [];

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    const userId = this.route.snapshot.paramMap.get('id');
  
    this.httpClient
      .get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .subscribe((data) => {
        this.data = data;
        console.log(this.data);
      });

    
  }


  
}
