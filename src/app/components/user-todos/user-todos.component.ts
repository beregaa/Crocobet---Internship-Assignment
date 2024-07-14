import { NgClass, NgFor } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { toDoInterface } from '../../interfaces/toDo.interface';

@Component({
  selector: 'app-user-todos',
  standalone: true,
  imports: [HttpClientModule, NgFor, NgClass, MatTableModule],
  templateUrl: './user-todos.component.html',
  styleUrl: './user-todos.component.css',
})
export class UserTodosComponent {
  constructor(private httpClient: HttpClient, private route: ActivatedRoute) {}
  toDoData: toDoInterface[] = [];
  displayedColumns: string[] = ['title', 'completed'];

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    const userId = this.route.snapshot.paramMap.get('id');

    this.httpClient
      .get<toDoInterface[]>(
        `https://jsonplaceholder.typicode.com/todos?userId=${userId}`
      )
      .subscribe((data) => {
        this.toDoData = data;
      });
  }
}
