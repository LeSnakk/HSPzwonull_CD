import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {OverviewKategoriesComponent} from "./components/overview-kategories/overview-kategories.component";
import {HomeComponent} from "./components/home/home.component";
import {DetailKursComponent} from "./components/detail-kurs/detail-kurs.component";
import {OverviewKurseComponent} from './components/overview-kurse/overview-kurse.component';
import {DetailNewsComponent} from './components/detail-news/detail-news.component';
import {OverviewWeekComponent} from './components/overview-week/overview-week.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'overview-categories', component: OverviewKategoriesComponent},
  {path: 'overview-week', component: OverviewWeekComponent},
  {path: 'detail-kurs/:id', component: DetailKursComponent},
  {path: 'detail-news/:id', component: DetailNewsComponent},
  {path: 'overview-kurse/:id', component: OverviewKurseComponent},
  {path: 'overview-week/:id', component: OverviewWeekComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
