import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardsService {
 private _tagsHistory: string[] = []
 private apikey: string= 'OKappK3fKEWWXWSxbmBO6GKXLKCXoGJi'


  constructor() {}

get tagsHistory(): string[]{
  return[...this._tagsHistory]
}

searchTags(tag: string): void{
  if (tag.length === 0) return

  this.organizeHistody(tag)
  console.log(this._tagsHistory)
}

private organizeHistody(tag: string): void{

  tag = tag.toLocaleLowerCase();
 if(this._tagsHistory.includes(tag)){
  this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag)
 }

 this._tagsHistory.unshift(tag);
 this._tagsHistory = this.tagsHistory.splice(0, 10)

}



}
