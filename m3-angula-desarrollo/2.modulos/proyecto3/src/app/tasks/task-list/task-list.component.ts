import { Component } from '@angular/core';
import { ITask } from '../tasks.model';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  tasks: ITask[] = [
    {
      id: 1,
      title: 'crear modulos en angular',
      hours: 7
    },
    {
      id: 2,
      title: 'crear componente angular',
      hours: 8
    },

    {
      id: 3,
      title: 'crear servi angular',
      hours: 9
    }

  ]

}
