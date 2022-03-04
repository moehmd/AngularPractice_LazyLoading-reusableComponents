import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'eq-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  @Input() totalTrades: number = 0;
  @Input() pageSize: number = 0;
  @Input() pageSizeOptions: number[] = [];
  @Output() pagination = new EventEmitter();

  setPage(event: any) {
    let newPage = {
      pageIndex: event.pageIndex + 1,
      pageSize: event.pageSize
    }
    this.pagination.emit(newPage);
  };

}
