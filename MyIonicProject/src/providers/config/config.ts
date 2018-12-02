import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from "rxjs";

/*
  Generated class for the ConfigProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ConfigProvider {
  // profiles/profilefilter
  private baseUrl = 'http://api.meetingplannerguide.com/api/';

  constructor(public http: HttpClient) {
    console.log('Hello ConfigProvider Provider');
  }

  public getConfig(url) {
    return this.http.get(this.baseUrl + url, this.httpOptions);
  }

  public postConfig(url, obj) {
    return this.http.post(this.baseUrl + url, obj, this.httpOptions);
  }

  public getImage(imageUrl: string): Observable<Blob> {
    return this.http.get(imageUrl, { responseType: 'blob' });
  }

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token'
    })
  };

}
