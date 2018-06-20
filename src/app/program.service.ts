import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProgramService {
private configUrl = 'https://api.myjson.com/bins/5bdb3';
private statUrl = 'https://api.myjson.com/bins/47axv';

  constructor(private http: HttpClient) { 
    this.getPrograms();
  }

  public getPrograms() {
    return this.http.get(this.configUrl);
  }

  public getStats() {
    return this.http.get(this.statUrl);
  }
}
