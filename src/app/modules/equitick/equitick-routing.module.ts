import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquitickComponent } from './equitick.component';

const routes: Routes = [{ path: '', component: EquitickComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EquitickRoutingModule { }
