import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Beach} from '../models/Beach';
import {environment} from '../../../environments/environment';

@Injectable()

export class BeachService {
  private baseUrl = `${environment.apiUrl}/beaches`;

  constructor(private http: HttpClient) {
  }

  getBeaches = () => {
    return this.http.get<Array<Beach>>(this.baseUrl);
  };

  getBeachById = (id) => {
    return this.http.get<Beach>(`${this.baseUrl}/${id}`);
  };

  insertBeach = (beach: Beach) => {
    return this.http.post<Beach>(this.baseUrl, { ...beach });
  };

  editBeach = (beach: Beach) => {
    return this.http.put(`${this.baseUrl}/${beach.id}`, { ...beach });
  };

  deleteBeach = (id) => {
    return this.http.delete(`${this.baseUrl}/${id}`);
  };
}
