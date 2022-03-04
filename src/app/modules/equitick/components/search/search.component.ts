import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SearchInput } from '../../models/SearchInput';

@Component({
  selector: 'eq-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  @Input() searchForm!: FormGroup;
  @Input() SearchFields: SearchInput[] = [];
  @Output() searchObject = new EventEmitter();

  searchTrades() {
    if (!this.searchForm.value.deal) {
      this.searchForm.value.deal = 0;
    } else {
      this.searchForm.value.deal = parseInt(this.searchForm.value.deal);
    };
    if (!this.searchForm.value.login) {
      this.searchForm.value.login = 0;
    } else {
      this.searchForm.value.login = parseInt(this.searchForm.value.login);
    };
    this.searchObject.emit(this.searchForm.value);
  };

}
