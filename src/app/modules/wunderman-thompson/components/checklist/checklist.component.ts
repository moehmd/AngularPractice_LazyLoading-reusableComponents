import { Component, EventEmitter, Input, Output } from '@angular/core';
import { checkedBoxes } from '../../models/checkedBoxes';
import { filterEntity } from '../../models/filterEntities';

@Component({
  selector: 'wt-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.scss']
})
export class ChecklistComponent {
  @Input() entities!: filterEntity[];
  @Output() checked = new EventEmitter();

  obj: checkedBoxes = { 
    "categories": [],
    "formats": [],
  };

  getCheckboxes() {
    if(this.entities[0].listOfProps) {
      this.obj.categories = this.entities[0].listOfProps
        .filter((c: { checked: boolean; }) => c.checked === true)
        .map((c: { id: number; }) => c.id);
    };
    if(this.entities[1].listOfProps) {
      this.obj.formats = this.entities[1].listOfProps
        .filter((f: { checked: boolean; }) => f.checked === true)
        .map((f: { id: number; }) => f.id);
    };
    this.checked.emit(this.obj);
  };
}