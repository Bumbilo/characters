import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map} from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class BaseApi {
  // private baseUrl = 'https://gbngq2s2e0.execute-api.eu-west-2.amazonaws.com/api/';
  private baseUrl = 'http://localhost:3030/api/';

  private headers = new HttpHeaders();

  constructor(public http: HttpClient) {
    // this.headers.append('Content-Type', 'application/json');
    // this.headers.append('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    // this.headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    // this.headers.set('Access-Control-Allow-Origin', '*');
  }

  private getUrl(url: string): string {
    return this.baseUrl + url;
  }


  public get(url: string = ''): Observable<any> {
    return this.http.get(this.getUrl(url));
  }
}
