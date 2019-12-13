import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './component/home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './component/contact/contact.component';

const routes: Routes = [
  { path: "", pathMatch: "full", component: HomeComponent },
  { path: "contact", component: ContactComponent },
  { path: "users", loadChildren: "./users/users.module#UsersModule" }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
