import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    PagesComponent
  ],
  imports: [BrowserModule,
    AppRoutingModule,
    RouterModule,
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
