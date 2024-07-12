import { Component, OnInit, inject } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgFor } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { Button } from '../button/button.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-users',
  standalone: true,
  imports: [HttpClientModule, NgFor, MatTableModule, Button],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  constructor(private httpClient: HttpClient, private router: Router) {}
  data: any = [];
  displayedColumns: string[] = [
    'name',
    'lastName',
    'phone',
    'email',
    'company',
    'actions',
  ];

  onButtonClick(user: any): void {
    console.log('Button clicked for', user);
    this.router.navigate([`/posts/${user.id}`]);
  }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.httpClient
      .get('https://jsonplaceholder.typicode.com/users')
      .subscribe((data: any) => {
        this.data = data.map((data: any) => {
          const [firstName, lastName] = data.name.split(' ');
          return {
            ...data,
            firstName,
            lastName,
          };
        });
        console.log(this.data);
      });
  }
}
