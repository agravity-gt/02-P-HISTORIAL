import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsSearchBoxComponent } from './components/cards-search-box/cards-search-box.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CardsListComponent } from './components/cards-list/cards-list.component';



@NgModule({
  declarations: [
    CardsSearchBoxComponent,
    HomePageComponent,
    CardsListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomePageComponent
  ]
})
export class CardsModule { }
