import { Component, Output, EventEmitter, Optional, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TradeInput } from '../../models/TradeInput';

@Component({
  selector: 'eq-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  @Output() addObject = new EventEmitter();

  tradeInputs: TradeInput[];
  addForm!: FormGroup;

  constructor(
    public _dialogRef: MatDialogRef<DialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    console.log(data);
    this.tradeInputs = data.tradeInputs;
    this.addForm = data.addForm;
  }

  addTrade() {
    this.addObject.emit(this.addForm.value);
  };
}