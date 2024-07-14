import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { UserInterface } from '../../interfaces/user.interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  standalone: true,
  imports: [HttpClientModule, NgFor, MatTableModule, FormsModule],
})
export class UsersComponent implements OnInit {
  users: UserInterface[] = [];
  filteredUsers: UserInterface[] = [];
  displayedColumns: string[] = [
    'name',
    'lastName',
    'phone',
    'email',
    'company',
    'actions',
    'toDos',
  ];
  searchTerm: string = '';

  constructor(private httpClient: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.httpClient
      .get<UserInterface[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe((data) => {
        this.users = data.map((user: UserInterface) => {
          const [firstName, lastName] = user.name.split(' ');
          return {
            ...user,
            firstName,
            lastName,
          };
        });
        this.filteredUsers = [...this.users];
      });
  }

  filterUsers(): void {
    const searchTerm = this.searchTerm.toLowerCase();

    if (!searchTerm) {
      this.filteredUsers = [...this.users];
    } else {
      this.filteredUsers = this.users.filter((user: UserInterface) =>
        this.matchSearchTerm(user, searchTerm)
      );
    }
  }

  matchSearchTerm(user: UserInterface, term: string): boolean {
    return (
      user.firstName.toLowerCase().includes(term) ||
      user.lastName.toLowerCase().includes(term) ||
      user.email.toLowerCase().includes(term)
    );
  }

  onPostsButtonClick(user: UserInterface): void {
    this.router.navigate([`/posts/${user.id}`]);
  }
  onToDosButtonClick(user: UserInterface): void {
    this.router.navigate([`/todos/${user.id}`]);
  }
}
