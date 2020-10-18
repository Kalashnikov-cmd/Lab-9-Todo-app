import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { MatButtonModule } from '@angular/material/button'; 
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card'; 
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { TodoTitleComponent } from './todo-title/todo-title.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoCreateComponent } from './todo-create/todo-create.component';
import { TodoDetailsComponent } from './todo-details/todo-details.component';
import { MatTableModule } from '@angular/material/table'; 
import { MatListModule } from '@angular/material/list'; 
import {MatExpansionModule} from '@angular/material/expansion'; 

@NgModule({
  declarations: [
    AppComponent,
    TodoTitleComponent,
    TodoListComponent,
    TodoCreateComponent,
    TodoDetailsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatTableModule,
    MatListModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }