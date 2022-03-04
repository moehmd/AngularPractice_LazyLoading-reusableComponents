import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms"

import { WundermanThompsonRoutingModule } from './wunderman-thompson-routing.module';
import { EquitickModule } from '../equitick/equitick.module';

import { WundermanThompsonComponent } from './wunderman-thompson.component';
import { ContainerComponent } from './components/container/container.component';
import { ChecklistComponent } from './components/checklist/checklist.component';
import { ItemsComponent } from './components/items/items.component';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    WundermanThompsonComponent,
    ContainerComponent,
    ChecklistComponent,
    ItemsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    WundermanThompsonRoutingModule,
    EquitickModule,
    MatCheckboxModule,
    MatButtonModule,
    MatCardModule
  ]
})
export class WundermanThompsonModule { }
