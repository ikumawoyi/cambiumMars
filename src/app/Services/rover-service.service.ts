import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RoverServiceService {

  constructor(private httpClient: HttpClient) { }

  saveRover(rover: any): Observable<any[]> {
    return this.httpClient.post<any[]>(`${environment.apiUrl}/rover`, rover);
  }
}
