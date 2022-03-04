import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { TradesService } from '../../services/trades.service';
import { INewTrade } from './../../models/newTrade';
import { ITrade } from '../../models/ITrade';
import { ISearchReq } from '../../models/ISearchReq';
import { MatTableDataSource } from '@angular/material/table';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { IPagination } from '../../models/IPagination';
import { ISearchParam } from '../../models/ISearchParam';
import { TradeInput } from '../../models/TradeInput';
import { SearchInput } from '../../models/SearchInput';


@Component({
  selector: 'eq-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})

export class ContainerComponent implements OnInit {
  TableColumns: string[] = ['deal', 'login', 'entry', 'action', 'time', 'symbol', 'price', 'profit', 'volume'];
  SearchFields: SearchInput[] = [
    { name: "deal", type: "number" },
    { name: "login", type: "number" },
  ];
  pageSizeOptions = [10, 20, 30];
  TradeInputs: TradeInput[] = [
    { name: "login", type: "number" },
    { name: "entry", type: "number" },
    { name: "action", type: "number" },
    { name: "symbol", type: "text" },
    { name: "price", type: "number" },
    { name: "profit", type: "number" },
    { name: "volume", type: "number" }
  ];
  defaultAllTrades: ISearchReq = {
    "login": 0,
    "deal": 0,
    "pageIndex": 1,
    "pageSize": 10
  };

  newTrade: INewTrade = {
    "login": 0,
    "entry": 0,
    "action": 0,
    "symbol": '',
    "time": '',
    "price": 0,
    "profit": 0,
    "volume": 0,
  }

  public allTrades = new MatTableDataSource<ITrade>();
  public tradeProperties: string[] = [];
  public totalTrades: number = 0;
  public pageSize: number = 0;
  public dataType: string = "trades";
  public searchForm!: FormGroup;

  constructor(
    private _tradeService: TradesService,
    private _formBuilder: FormBuilder,
    private _datePipe: DatePipe,
    public _dialog: MatDialog
  ) { }

  public async ngOnInit(): Promise<void> {
    this.tradeProperties = this.TableColumns;
    this.pageSize = this.defaultAllTrades.pageSize;
    this.GetAllTrades();
    this.searchForm = this._formBuilder.group({
      deal: '',
      login: ''
    });
  }

  public addForm = new FormGroup({
    login: new FormControl(''),
    entry: new FormControl(''),
    action: new FormControl(''),
    symbol: new FormControl(''),
    price: new FormControl(''),
    profit: new FormControl(''),
    volume: new FormControl('')
  });

  public async openDialog() {
    const dialogRef = this._dialog.open(DialogComponent, {
      width: '30rem',
      data: {
        tradeInputs: this.TradeInputs,
        addForm: this.addForm
      }
    });

    dialogRef.componentInstance.addObject.subscribe((sub: INewTrade) => {
      this.newTrade = sub;
      this.newTrade.time = new Date().toLocaleString().replace(',', '');
      this.addNewTrade();
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  };

  public async GetAllTrades() {
    this._tradeService.GetTrades(this.defaultAllTrades).subscribe(response => {
      if (response) {
        this.allTrades.data = response.trades;
        this.allTrades.data.forEach((trade) => {
          trade.time = this._datePipe.transform(trade.time, 'MMM d, y, h:mm:ss a');
        });
        this.totalTrades = response.totalTrades;
      };
    });
  };

  public async addNewTrade() {
    this._tradeService.AddTrade(this.newTrade).subscribe(response => {
      if (response) {
        console.log(response)
      };
      this.defaultAllTrades.login = this.newTrade.login;
      this.defaultAllTrades.pageIndex = 1;
      this.GetAllTrades();
    });
  };

  public async handlePagination(pagination: IPagination) {
    this.defaultAllTrades.pageIndex = pagination.pageIndex;
    this.defaultAllTrades.pageSize = pagination.pageSize;
    this.GetAllTrades();
  };

  public async handleSearch(search: ISearchParam) {
    this.defaultAllTrades.deal = search.deal;
    this.defaultAllTrades.login = search.login;
    this.defaultAllTrades.pageIndex = 1;
    this.GetAllTrades();
  };

}
