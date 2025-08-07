import { Routes } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';
import { LoginComponent } from './features/auth/login/login.component';
import { RegisterComponent } from './features/auth/register/register.component';
import { JobListComponent } from './features/jobs/job-list/job-list.component';
import { JobDetailsComponent } from './features/jobs/job-details/job-details.component';

export const routes: Routes = [
  { 
    path: 'login', 
    component: LoginComponent 
  },
  { 
    path: 'register', 
    component: RegisterComponent 
  },
  { 
    path: 'jobs', 
    component: JobListComponent
  },
  { 
    path: 'jobs/:id', 
    component: JobDetailsComponent
  },
  { 
    path: 'home', 
    component: HomeComponent 
  },
  { 
    path: '', 
    redirectTo: 'home', 
    pathMatch: 'full' 
  },
  { 
    path: '**', 
    redirectTo: 'home', 
    pathMatch: 'full' 
  }
];
