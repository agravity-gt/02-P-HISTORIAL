import { Component, ElementRef, ViewChild } from '@angular/core';
import { CardsService } from '../../services/cards.service';

@Component({
  selector: 'cards-search-box',
  template: `
  <h5>Buscar:</h5>
  <input type="text" class="form-control" placeholder="Buscar cards.."
  (keyup.enter)="searchTag()"
  #txtTagInput>
  `,
  styleUrls: ['./cards-search-box.component.css']
})
export class CardsSearchBoxComponent {

@ViewChild('txtTagInput')
public tagInput!: ElementRef<HTMLInputElement>;

constructor(private cardsService: CardsService){}


searchTag(){
const newTag = this.tagInput.nativeElement.value
this.cardsService.searchTags(newTag)
this.tagInput.nativeElement.value='' 
  }
}
