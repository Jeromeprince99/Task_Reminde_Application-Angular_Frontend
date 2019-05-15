import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'; 
import { UserService } from './user.service';
import { CreatetaskComponent } from './createtask/createtask.component';
import { ViewtaskComponent } from './viewtask/viewtask.component'; 
import { TaskserviceService } from 'src/taskservice.service';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes} from '@angular/router';
import { TaskreminderComponent } from './taskreminder/taskreminder.component';
import { HomeComponent } from './home/home.component';
import { ViewtaskofauserComponent } from './viewtaskofauser/viewtaskofauser.component';
import { FooterComponent } from './footer/footer.component';
import { FetchuserComponent } from './fetchuser/fetchuser.component';
import { DisplaytaskofauserComponent } from './displaytaskofauser/displaytaskofauser.component';
import { ChildNotificationComponent } from './child-notification/child-notification.component';
import {ToastrModule} from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'createtask', component: CreatetaskComponent },
  { path: 'viewtask', component: ViewtaskComponent },
  { path: 'view_task_of_a_user', component: ViewtaskofauserComponent }, 
  { path: 'reminders', component: TaskreminderComponent },  
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: LoginComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CreatetaskComponent,
    ViewtaskComponent,
    LoginComponent,
    TaskreminderComponent,
    HomeComponent,
    ViewtaskofauserComponent,
    FooterComponent,
    FetchuserComponent,
    DisplaytaskofauserComponent,
    ChildNotificationComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    ToastrModule.forRoot({
      timeOut : 5000,
      positionClass : 'toast-top-right' ,
      preventDuplicates : true,
      tapToDismiss : true,  

    }),
    BrowserAnimationsModule, 
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
