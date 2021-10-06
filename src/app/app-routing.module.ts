import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { BlogdetailsComponent } from './blogdetails/blogdetails.component';
import { CategoryComponent } from './category/category.component';
import { ContactComponent } from './contact/contact.component';
import { DetailsComponent } from './details/details.component';
import { ElementComponent } from './element/element.component';
import { NewsComponent } from './news/news.component';
import { TrendingComponent } from './trending/trending.component';

const routes: Routes = [
  {
    path : "",
    component : TrendingComponent
  },
  {
    path : "home",
    component : TrendingComponent
  },
  {
    path : "category",
    component : CategoryComponent
  },
  {
    path : "about",
    component : AboutComponent
  },
  {
    path : "news",
    component : NewsComponent
  },
  {
    path : "contact",
    component : ContactComponent
  },
  {
    path : "elements",
    component : ElementComponent
  },
  {
    path : "blog",
    component : BlogComponent
  },
  {
    path : "blogdetails",
    component : BlogdetailsComponent
  },
  {
    path : "news/:id",
    component : DetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }