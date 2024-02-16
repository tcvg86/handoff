import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://127.0.0.1:5000';
  constructor(private http: HttpClient) { }

  getCurrentUser(): Observable<any[]> {
    return this.http.get<any>(`${this.apiUrl}/user`)
  }
  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/get_users`)
  }
  getEntries(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/get_entries`);
  }

  getCities() : Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/get_cities`);
  }

  saveEntry(entryData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/save_entry`, entryData);
  }

  addUser(entryData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/add_user`, entryData);
  }

  getEntry(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/get_entry/${id}`);
  }
}
