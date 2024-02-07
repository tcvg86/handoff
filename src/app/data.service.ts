import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://127.0.0.1:5000/get_entries';
  constructor(private http: HttpClient) { }

  getEntries(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
