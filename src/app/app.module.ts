import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { PortfolioComponent } from "./portfolio/portfolio/portfolio.component";
import { MessagesComponent } from "./task-manager/messages/messages.component";
import { TaskDetailComponent } from "./task-manager/task-detail/task-detail.component";
import { TasksComponent } from "./task-manager/tasks/tasks.component";
import { AddInputComponent } from "./todo/add-input/add-input.component";
import { ItemComponent } from "./todo/item/item.component";
import { TodosComponent } from "./todo/todos/todos.component";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AddButtonComponent } from './todo/add-button/add-button.component';

import { NgxWebstorageModule } from 'ngx-webstorage';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    TaskDetailComponent,
    MessagesComponent,
    PortfolioComponent,
    TodosComponent,
    ItemComponent,
    AddInputComponent,
    HeaderComponent,
    FooterComponent,
    AddButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxWebstorageModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
