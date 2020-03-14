import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PostsComponent } from './modules/posts/posts.component';
import { LoginComponent } from './shared/components/login/login.component';
import { NotemissionComponent } from './modules/notemission/notemission.component';

const routes: Routes = [{
  
    path: 'dashboard',
  component: DefaultComponent,
  children: [
    {path: 'dossiervisite',component: DashboardComponent},
   {path: 'noteM',component: NotemissionComponent},
   {path: 'posts',component: PostsComponent}
  
  
  ]
},

{ path: '', component: LoginComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
