import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccordionsComponent } from './accordion/accordions.component';

import { NavsComponent } from './navs/navs.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Base',
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'cards',
      },
      {
        path: 'saveingsninvestment/:policy',
        component: AccordionsComponent,
        data: {
          title: 'Savings & Investment',
        },
      },

      {
        path: 'navs',
        component: NavsComponent,
        data: {
          title: 'Navs & Tabs',
        },
      }

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BaseRoutingModule {}

