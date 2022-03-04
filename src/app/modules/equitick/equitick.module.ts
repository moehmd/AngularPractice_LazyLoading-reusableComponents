import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EquitickRoutingModule } from './equitick-routing.module';
import { FlexModule } from '@angular/flex-layout';
import { EquitickComponent } from './equitick.component';

import { ContainerComponent } from './components/container/container.component';
import { TradesComponent } from './components/trades/trades.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { SearchComponent } from './components/search/search.component';
import { DialogComponent } from './components/dialog/dialog.component';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { LayoutModule } from '@angular/cdk/layout';

import { DatePipe } from '@angular/common';


@NgModule({
  declarations: [
    EquitickComponent,
    ContainerComponent,
    TradesComponent,
    PaginationComponent,
    SearchComponent,
    DialogComponent
  ],
  imports: [
    CommonModule,
    EquitickRoutingModule,
    FormsModule,
    FlexModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    LayoutModule
  ],
  providers: [DatePipe],
  exports: [
    PaginationComponent,
    SearchComponent
  ],
})
export class EquitickModule { }
