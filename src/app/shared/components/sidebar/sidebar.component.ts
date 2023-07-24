import { Component } from '@angular/core';
import { CardsService } from 'src/app/cards/services/cards.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

constructor(private cardsService: CardsService){}

get tags(){
  return this.cardsService.tagsHistory;
}

}
