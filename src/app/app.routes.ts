import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';
import { UserPostsComponent } from './user-posts/user-posts.component';

export const routes: Routes = [
  {
    path: 'users',
    component: UsersComponent,
    title: 'users',
  },
  {
    path: 'posts',
    component: PostsComponent,
    title: 'posts',
  },
  {
    path: 'posts/:id',
    component: UserPostsComponent,
    title: 'single post',
  },
];
