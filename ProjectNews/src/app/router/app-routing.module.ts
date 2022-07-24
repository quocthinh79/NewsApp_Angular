import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {
  CatalogDetailComponent
} from "../component/catalog-detail/catalog-detail.component";

const routes: Routes = [
  {
    path: ':id',
    component: CatalogDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,  {onSameUrlNavigation: 'reload' ,
    scrollPositionRestoration: 'top', enableTracing: true})],
  exports: [RouterModule]
})

export class AppRoutingModule { }
