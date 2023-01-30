import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { DevViewComponent } from './dev-view/dev-view.component';
import { MktgViewComponent } from './mktg-view/mktg-view.component';
import { SummaryViewComponent } from './summary-view/summary-view.component';

const routes: Routes = [
  {
    path: 'development',
    component: DevViewComponent,
    title: 'Development | Brennan Davis',
  },
  {
    path: 'marketing',
    component: MktgViewComponent,
    title: 'Marketing | Brennan Davis',
  },
  { path: 'blog', component: BlogViewComponent, title: 'Blog | Brennan Davis' },
  {
    path: '',
    component: SummaryViewComponent,
    title: 'Summary | Brennan Davis',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
