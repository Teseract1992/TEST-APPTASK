import { Component, OnInit, HostBinding } from '@angular/core';
import { Task } from 'src/app/models/Task';

import { TasksService } from 'src/app/services/tasks.service';
import { UploadService } from 'src/app/services/upload-document.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  @HostBinding('class') clases = 'row';

  task: Task = {
    id: 0,
    title: '',
    description: '',
    image: '',
    created_at: new Date()
  };

  edit: boolean = false;

  constructor(private taskService: TasksService, private uploadService: UploadService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.taskService.getTask(params.id)
        .subscribe(
          res => {
            console.log(res);
            this.task = res;
            this.edit = true;
          },
          err => console.log(err)
        )
    }
  }

  saveNewTask() {
    delete this.task.created_at;
    delete this.task.id;
    this.taskService.saveTask(this.task)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/tasks']);
        },
        err => console.error(err)
      )
  }

  updateTask() {
    delete this.task.created_at;
    this.taskService.updateTask(this.task.id, this.task)

      .subscribe(
        res => { 
          console.log(res);
          this.router.navigate(['/tasks']);
        },
        err => console.error(err)
      )
  }

  selectedFile = null;

  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
  }
  
  onUpload() {
    let formData = new FormData();
    formData.append('photo', this.selectedFile, this.selectedFile.name)
    this.uploadService.uploadFile(formData).subscribe((res)=> {
      console.log('response received is ', res);
    });
    }



}
