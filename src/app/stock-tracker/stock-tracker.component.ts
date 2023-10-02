import { Component } from '@angular/core';
import { StockTracker } from '../model/stock-tracker';

@Component({
  selector: 'app-stock-tracker',
  templateUrl: './stock-tracker.component.html',
  styleUrls: ['./stock-tracker.component.css']
})
export class StockTrackerComponent {
  public trackers: Array<StockTracker>;
  public listFavorites: Array<StockTracker>;


  constructor() {
    this.trackers = new Array<StockTracker>;
    this.listFavorites = new Array<StockTracker>;


  }

  ngOnInit() {
    this.trackers = [
    new StockTracker('AAPL', 'A', 135.39, 123.3423, 'NASDAQ'),
    new StockTracker('GOOG', 'G', 2300.12, 1729.40, 'NASDAQ'),
    new StockTracker('AMZN', 'AM', 3292.23, 2320.92, 'NASDAQ'),
    new StockTracker('TSLA', 'T', 729.40, 900.12, 'NASDAQ'),
    new StockTracker('MSFT', 'M', 258.26, 392.23, 'NASDAQ')]
  }
  toggleFavourite(event: Event, i: number) {
    this.trackers[i].favorite = !this.trackers[i].favorite;
    this.listFavorites.push(this.trackers[i]);


  }

  removeFavourite(event: Event, i: number) {
    this.listFavorites.splice(i, 1);


  }
}
