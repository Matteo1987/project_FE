import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Traffic} from '../models/Traffic';
import {of} from 'rxjs';


@Injectable()

export class TrafficService {
  private baseUrl = `${environment.apiUrl}/traffic`;

  constructor(
    private httpClient: HttpClient
  ) {
  }

  getTraffic = (city: string) => city ? this.httpClient.get<Traffic>(`${this.baseUrl}/${city}`) : of(null);
}
