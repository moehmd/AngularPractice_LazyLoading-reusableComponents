import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IPagination } from 'src/app/modules/equitick/models/IPagination';
import { checkedBoxes } from '../../models/checkedBoxes';
import { filterEntity } from '../../models/filterEntities';
import { Item } from '../../models/Item';
import { ItemFilters } from '../../models/ItemFilters';
import { searchEvent } from '../../models/searchEvent';
import { selectFewerProps } from '../../services/handles';
import { ItemsService } from '../../services/items.service';

@Component({
  selector: 'wt-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  itemReqObject: ItemFilters = {
    "pageIndex": 1,
    "pageSize": 6,
    "search": "",
    "categories": [],
    "formats": []
  };

  filterEntities: filterEntity[] = [
    {
      type: "categories",
      data_bs_target: "#panelsStayOpen-collapseOne",
      aria_controls: "panelsStayOpen-collapseOne",
      aria_labelledby: "panelsStayOpen-headingOne"
    },
    {
      type: "formats",
      data_bs_target: "#panelsStayOpen-collapseTwo",
      aria_controls: "panelsStayOpen-collapseTwo",
      aria_labelledby: "panelsStayOpen-headingTwo"
    }
  ];

  SearchFields = [{
    name: "searchFilter",
    type: "text"
  }];

  pageSizeOptions = [6, 12, 18];

  public searchForm!: FormGroup;
  public pageSize: number = 0;
  public totalTrades: number = 0;
  public dataName: string = "items";
  public Items: Item[] = [];

  constructor(
    private _itemService: ItemsService,
    private _formBuilder: FormBuilder,) { }

  ngOnInit(): void {
    this.GetAllCategories();
    this.GetAllFormats();
    this.pageSize = this.itemReqObject.pageSize;
    this.searchForm = this._formBuilder.group({
      searchFilter: ''
    });
    this.GetAllItems();
  }

  public async GetAllCategories() {
    this._itemService.GetCategories().subscribe(response => {
      if (response) {
        let firstListOfProps = response.map(obj => ({
          ...obj, checked: false, id: obj.categoryId
        })).map(selectFewerProps);
        this.filterEntities[0].listOfProps = firstListOfProps;
      };
    });
  };

  public async GetAllFormats() {
    this._itemService.GetFormats().subscribe(response => {
      if (response) {
        let secondListOfProps = response.map(obj => ({
          ...obj, checked: false, id: obj.formatId
        })).map(selectFewerProps);
        this.filterEntities[1].listOfProps = secondListOfProps;
      };
    });
  };

  public async GetAllItems() {
    this._itemService.GetItems(this.itemReqObject).subscribe(response => {
      if (response) {
        this.Items = response.items;
        this.totalTrades = response.totalRecord;
      };
    });
  };

  public async handleCheckboxes(checked: checkedBoxes) {
    this.itemReqObject.categories = checked.categories;
    this.itemReqObject.formats = checked.formats;
    this.GetAllItems();
  };

  public async handleSearch(searchInput: searchEvent) {
    console.log(searchInput);
    this.itemReqObject.search = searchInput.searchFilter;
    this.GetAllItems();
  };

  public async handlePagination(pagination: IPagination) {
    this.itemReqObject.pageIndex = pagination.pageIndex;
    this.itemReqObject.pageSize = pagination.pageSize;
    this.GetAllItems();
  };

}
