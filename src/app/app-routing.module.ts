import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ClienteListComponent } from './components/cliente-list/cliente-list.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },{
    path:'clientes/lista',
    component:ClienteListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
