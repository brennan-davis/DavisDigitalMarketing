import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentNavBarComponent } from './content-nav-bar/content-nav-bar.component';
import { DevViewComponent } from './dev-view/dev-view.component';
import { MktgViewComponent } from './mktg-view/mktg-view.component';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { SummaryViewComponent } from './summary-view/summary-view.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, ContentNavBarComponent, DevViewComponent, MktgViewComponent, BlogViewComponent, SummaryViewComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
