import { Injectable} from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { DateAttend } from '../model/dateAttend';
import { Observable } from 'rxjs';
 
@Injectable()
export class DateAttendServiceService {
 
  private datesUrl: string;
  private startSessionUrl: string;
 
  constructor(private http: HttpClient) {
    this.datesUrl = 'http://localhost:8080/viewattendance';
    this.startSessionUrl = 'http://localhost:8080/attendance';
  }
 
  public findAll(): Observable<DateAttend[]> {
    return this.http.get<DateAttend[]>(this.datesUrl);
  }
 
  public save(dateAttend: DateAttend) {
    return this.http.post<DateAttend>(this.startSessionUrl, dateAttend);
  }
}
