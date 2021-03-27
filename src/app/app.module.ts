import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListsComponent } from './lists/lists.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';

import {RouterModule} from '@angular/router';

import { AppRouterModule } from './router.module';

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule, FormsModule, AppRouterModule, RouterModule],
  declarations: [AppComponent, ListsComponent, AddComponent, EditComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
