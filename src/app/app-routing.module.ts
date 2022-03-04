import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'wt',
    loadChildren: () =>
      import('./modules/wunderman-thompson/wunderman-thompson.module')
        .then(w => w.WundermanThompsonModule)
  }, {
    path: 'eq',
    loadChildren: () =>
      import('./modules/equitick/equitick.module')
        .then(e => e.EquitickModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
