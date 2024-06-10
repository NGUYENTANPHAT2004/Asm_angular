// search.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IProduct } from './components/type/product';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private searchResultsSource = new BehaviorSubject<IProduct[]>([]);
  searchResults$ = this.searchResultsSource.asObservable();

  setSearchResults(results: IProduct[]) {
    this.searchResultsSource.next(results);
  }
}
