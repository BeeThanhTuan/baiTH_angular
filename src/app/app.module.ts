import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StockTrackerComponent } from './stock-tracker/stock-tracker.component';
import { CreateStockComponent } from './create-stock/create-stock.component';

@NgModule({
  declarations: [
    AppComponent,
    StockTrackerComponent,
    CreateStockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
