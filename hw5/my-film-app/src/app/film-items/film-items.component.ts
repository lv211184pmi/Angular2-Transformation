import { Component, OnInit } from '@angular/core';
import {FilmItemsService} from './film-items.service';

@Component({
  selector: 'app-film-items',
  templateUrl: './film-items.component.html',
  styleUrls: ['./film-items.component.css']
})
export class FilmItemsComponent implements OnInit {
  filmList : Object[] = []
  filmName : string = "Matrix"; 

  constructor(private FilmItemsService: FilmItemsService) { }

  ngOnInit() {
    this.getFilms();
  }

  private getFilms(){
    if(this.filmName) {
      this.FilmItemsService.getFilms(this.filmName).subscribe((films: any[]) => {
        if(films && films.length){
          this.filmList = films;
          
        }
      })
    }
  }
}
