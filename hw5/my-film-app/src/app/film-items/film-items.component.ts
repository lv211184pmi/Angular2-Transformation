import { Component, OnInit } from '@angular/core';
import {FilmItemsService} from './film-items.service';

@Component({
  selector: 'app-film-items',
  templateUrl: './film-items.component.html',
  styleUrls: ['./film-items.component.css']
})
export class FilmItemsComponent implements OnInit {
  filmList : Object[] = []
  filmName : string; 
  constructor(private FilmItemsService: FilmItemsService) { }

  ngOnInit() {
    this.filmName = "Matrix"
    this.getFilms();
  }

  private getFilms(){
    if(this.filmName) {
      this.FilmItemsService.getFilms(this.filmName).subscribe(data => {
      this.filmList = data;
      })
    }
  }
}
