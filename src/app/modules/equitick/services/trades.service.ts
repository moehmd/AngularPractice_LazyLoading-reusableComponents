import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ITrade } from '../models/ITrade';
import { ITradeResponse } from '../models/ITradeResponse';
import { ISearchReq } from '../models/ISearchReq';
import { INewTrade } from '../models/newTrade';

@Injectable({
  providedIn: 'root'
})
export class TradesService {
  private _tradeAPI = "https://localhost:4995/api/Trade";
  constructor(private _http: HttpClient) { }

  GetTrades(searchReqBody: ISearchReq): Observable<ITradeResponse> {
    return this._http.post<ITradeResponse>(this._tradeAPI + "/Trades", searchReqBody);
  };

  AddTrade(newTrade: INewTrade): Observable<ITrade> {
    return this._http.post<ITrade>(this._tradeAPI + "/AddTrade", newTrade);
  };
}
