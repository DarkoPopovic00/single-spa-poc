import { Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { EmptyRouteComponent } from './empty-route/empty-route.component';

export const routes: Routes = [
      { 
    path: 'callback', 
    component: EmptyRouteComponent // Just an empty component
  },
  { 
    path: 'app1', 
    component: EmptyRouteComponent,
    canActivate: [AuthGuard]
  },
  { 
    path: 'app2', 
    component: EmptyRouteComponent,
    canActivate: [AuthGuard]
  },
  { 
    path: '', 
    redirectTo: '/app1', 
    pathMatch: 'full' 
  }
];
