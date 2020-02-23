import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DreamListComponent } from './dream-list/dream-list.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';


// AppRouting module
import { AppRouting } from './app-routing.module';
import { DreamAddComponent } from './dream-add/dream-add.component';
import { DreamUpdateComponent } from './dream-update/dream-update.component';


@NgModule({
  declarations: [
    AppComponent,
    DreamListComponent,
    DreamAddComponent,
    DreamUpdateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatButtonModule,
    AppRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
