import { Component, OnInit, HostBinding } from '@angular/core';

import { TasksService } from '../../services/tasks.service';
import { Task } from 'src/app/models/Task';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css'],
})
export class TasksListComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  tasks: any = [];

  constructor(private taskService: TasksService) { }


  ngOnInit() {
    this.getTasks();
  }

  getTasks() {
    this.taskService.getTasks()
      .subscribe(
        res => {
          this.tasks = res;
        },
        err => console.error(err)
      );
  }

  deleteTask(id: string) {
    this.taskService.deleteTask(id)
      .subscribe(
        res => {
          console.log(res);
          this.getTasks();
        },
        err => console.error(err)
      )
  }

}
