import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {
  CatalogDetailComponent
} from "../component/catalog-detail/catalog-detail.component";
import {HomeComponent} from "../component/home/home.component";
import {NewsDetailComponent} from "../component/news-detail/news-detail.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: ':id',
    component: CatalogDetailComponent
  },
  {
    path: 'detail/:detail',
    component: NewsDetailComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
