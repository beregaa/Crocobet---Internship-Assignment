import { NgFor } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { forkJoin } from 'rxjs';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ModalButtonComponent } from '../modal-button/modal-button.component';
import { PostInterface } from '../../interfaces/post.interface';
import { UserInterface } from '../../interfaces/user.interface';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [NgFor, HttpClientModule, MatTableModule, MatDialogModule],
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  private readonly httpClient = inject(HttpClient);
  private readonly dialog = inject(MatDialog);

  posts: (PostInterface & { username: string })[] = [];
  displayedColumns: string[] = ['username', 'title', 'actions'];

  ngOnInit(): void {
    this.fetchData();
  }

  private fetchData(): void {
    forkJoin({
      users: this.httpClient.get<UserInterface[]>(
        'https://jsonplaceholder.typicode.com/users'
      ),
      posts: this.httpClient.get<PostInterface[]>(
        'https://jsonplaceholder.typicode.com/posts'
      ),
    }).subscribe(({ users, posts }) => {
      const userDictionary = users.reduce<{ [key: number]: string }>(
        (dictionary, user) => {
          dictionary[user.id] = user.username;
          return dictionary;
        },
        {}
      );

      this.posts = posts.map((post) => ({
        ...post,
        username: userDictionary[post.userId] || 'Unknown',
      }));
    });
  }

  openModal(post: PostInterface): void {
    this.dialog.open(ModalButtonComponent, { data: { postData: post } });
  }
}
