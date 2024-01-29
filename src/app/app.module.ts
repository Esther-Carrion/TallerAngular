import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { BooksComponent } from './books/books/books.component';
import { ShoppingComponent } from './shopping/shopping/shopping.component';
import { ResaltarDirective } from './Directive/resaltar.directive';
import { SummaryComponent } from './Summary/summary/summary.component';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { filter } from 'rxjs';
import { filterReducer } from './Reducer/filter.reducer';
import { FilterEffects } from './Effect/filter.effects';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BooksComponent,
    ShoppingComponent,

    ResaltarDirective,
    SummaryComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({filter: filterReducer}),
    EffectsModule.forRoot([FilterEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
