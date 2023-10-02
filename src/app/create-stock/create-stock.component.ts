import { Component } from '@angular/core';
import { StockTracker } from '../model/stock-tracker';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-create-stock',
  templateUrl: './create-stock.component.html',
  styleUrls: ['./create-stock.component.css']
})
export class CreateStockComponent {
  public stockC : StockTracker;
  public confirmed = false;
  public exchange = ['NYSE', 'NASDAQ', 'OTHER']
  constructor(){
    this.stockC = new StockTracker('AAPL','AB',135.39, 123.3423,'NASDAQ')
  }

 setStockPrice(price: number){
    this.stockC.price = price;
    this.stockC.previousPrice = price;
 }
  createStock(formStock :any){
    if(formStock.valid){
      console.log('Create stock', this.stockC);
      alert(`
      stock name:  ${this.stockC.name}
      stock code:  ${this.stockC.code}
      stock price:  ${this.stockC.price}
      stock previous price:  ${this.stockC.previousPrice}
      stock exchange:  ${this.stockC.exchange}`)
    }
    else{
      alert('Stock form is an invalid state');

    }
  }

 
    
}
