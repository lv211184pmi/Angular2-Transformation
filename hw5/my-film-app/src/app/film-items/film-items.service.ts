import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable'

@Injectable()
export class FilmItemsService {
  url: string = "http://www.omdbapi.com/?apikey=520bbe17&page=1&s="
  constructor(private http: Http) { }

  private extractData(res: Response) {
    let body = res.json();
    return body.Search || [];
  }

  getFilms (filmName: string): Observable<any> {
    return this.http.get(`${this.url}${filmName}`)
           .map(this.extractData);
  }
}
