import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { CharacterListComponent } from './components/character-list/character-list.component'; 
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginComponent } from './components/login/login.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard'

const routes: Routes = [
  {
    path : '', pathMatch: 'full',redirectTo:'/login',
   
  },
  {
    path : 'main',
    component : CharacterListComponent,
    ...canActivate(()=> redirectUnauthorizedTo(['/login']))
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path : 'login',
    component : LoginComponent
  },
  {
    path : '**',
    component : NotFoundComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
