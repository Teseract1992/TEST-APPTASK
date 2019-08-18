import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TasksListComponent } from './components/tasks-list/tasks-list.component';
import { TaskFormComponent } from './components/task-form/task-form.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/tasks',
    pathMatch: 'full'
  },
  {
    path: 'tasks',
    component: TasksListComponent
  },
  {
    path: 'tasks/add',
    component: TaskFormComponent
  },
  {
    path: 'tasks/edit/:id',
    component: TaskFormComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
