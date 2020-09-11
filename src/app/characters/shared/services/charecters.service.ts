import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BaseApi} from './../../../core/base-api';
import {Character} from './../models/character.model';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CharectersService extends BaseApi {

  constructor(public http: HttpClient) {
    super(http);
  }

  getCharacters(): Observable<Character[]> {

    console.log('getCharacters');
    return this.get('characters').pipe(map((response: Response) => {
      console.log('response ------------------>', response);
      return response['results'];
    }));
  }

  getCharacterById(id: string): Observable<Character> {
    return this.get(`characters/${id}`);
  }

  getEpisodeById(url: string): Observable<any> {
    return this.http.get(url);
  }
}
