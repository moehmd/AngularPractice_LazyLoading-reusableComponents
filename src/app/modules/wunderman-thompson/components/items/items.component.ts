import { Component, Input } from '@angular/core';
import { Item } from '../../models/Item';

@Component({
  selector: 'wt-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent {
  @Input() dataName: string = "";
  @Input() totalTrades: number = 0;
  @Input() Items: Item[] = [];
}
