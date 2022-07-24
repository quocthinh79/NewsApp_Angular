import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {
  CatalogDetailComponentComponent
} from "../component/catalog-detail-component/catalog-detail-component.component";

const routes: Routes = [
  {
    path: ':id',
    component: CatalogDetailComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,  {onSameUrlNavigation: 'reload' ,useHash: true,
    scrollPositionRestoration: 'top',
    anchorScrolling: 'enabled',
    scrollOffset: [0, 64],
    relativeLinkResolution: 'legacy'})],
  exports: [RouterModule]
})

export class AppRoutingModule { }
