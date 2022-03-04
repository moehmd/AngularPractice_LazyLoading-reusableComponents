import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categories } from '../models/Categories';
import { Formats } from '../models/Formats';
import { ItemsResponse } from '../models/ItemsResponse';
import { ItemFilters } from '../models/ItemFilters';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  private _itemAPI: string = "http://localhost:5000/api";

  constructor(private _http: HttpClient) { }

  GetCategories(): Observable<Categories[]> {
    return this._http.get<Categories[]>(this._itemAPI + "/Categories/categories");
  };

  GetFormats(): Observable<Formats[]> {
    return this._http.get<Formats[]>(this._itemAPI + "/Format/formats");
  };

  GetItems(itemFilters: ItemFilters): Observable<ItemsResponse> {
    return this._http.post<ItemsResponse>(this._itemAPI + "/Items/items", itemFilters);
  };
}