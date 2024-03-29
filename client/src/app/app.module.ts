import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { TasksListComponent } from './components/tasks-list/tasks-list.component';

// Services
import { TasksService } from './services/tasks.service';
import { UploadService } from './services/upload-document.service';
import { TaskFormComponent } from './components/task-form/task-form.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    TasksListComponent,
    TaskFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    TasksService,
    UploadService
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
