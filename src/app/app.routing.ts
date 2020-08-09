import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';


// import { EventsComponent } from './events/events.component';
// import { LoginComponent } from './login/login.component';
// import { RegisterComponent } from './register/register.component';


export const AppRoutes: Routes = [
  {
    path: '',
    redirectTo: 'leads',
    pathMatch: 'full',
  }, 
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
        {
      path: '',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
      
  }]
},
  {
    path: '**',
    redirectTo: 'leads'
  }
// changes starts on  08thaug2020
  // {
  //   path: 'events', 
  //   component: EventsComponent

  // },
  // {
  //   path: 'login', 
  //   component: LoginComponent

  // },
  // {
  //   path: 'register', 
  //   component: RegisterComponent

  // }
// changes ends on  08thaug2020
]
