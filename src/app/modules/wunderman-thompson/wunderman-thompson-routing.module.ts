import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WundermanThompsonComponent } from './wunderman-thompson.component';

const routes: Routes = [{ path: '', component: WundermanThompsonComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WundermanThompsonRoutingModule { }
