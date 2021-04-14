import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomepageComponent} from "./homepage/homepage.component";
import {NewproductComponent} from "./newproduct/newproduct.component";
import {EditproductComponent} from "./editproduct/editproduct.component";
import {CategorylistComponent} from "./categorylist/categorylist.component";
import {CategorydetailComponent} from "./categorydetail/categorydetail.component";

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'create',
    component: NewproductComponent
  },
  {
    path: 'edit/:id',
    component: EditproductComponent
  },
  {
    path: 'category',
    component: CategorylistComponent
  },
  {
    path: 'category/:id',
    component: CategorydetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
