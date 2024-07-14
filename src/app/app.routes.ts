import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PostsComponent } from './components/posts/posts.component';
import { UsersComponent } from './components/users/users.component';
import { UserPostsComponent } from './components/user-posts/user-posts.component';
import { UserTodosComponent } from './components/user-todos/user-todos.component';

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
    title: 'user post',
  },
  {
    path: 'todos/:id',
    component: UserTodosComponent,
    title: 'user todos',
  },
];
