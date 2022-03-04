import { Component, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ITrade } from '../../models/ITrade';

@Component({
  selector: 'eq-trades',
  templateUrl: './trades.component.html',
  styleUrls: ['./trades.component.scss']
})

export class TradesComponent {
  @Input() dataSource = new MatTableDataSource<ITrade>()
  @Input() properties: string[] = [];
  @Input() dataName: string = "";
  @Input() totalTrades: number = 0;
}
