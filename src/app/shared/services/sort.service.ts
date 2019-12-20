import {Injectable} from '@angular/core';
import {Beach} from '../models/Beach';

@Injectable()

export class SortService {

  constructor() {
  }

  getSortedData = (data: Array<Beach>, key: string = 'park'): Array<Beach> => {
    let desc: boolean;

    switch (key) {
      case 'park':
      case 'summer_crowding':
        desc = key !== 'park';
        data = data.sort((a: Beach, b: Beach) => this.booleanCriteria(a[key], b[key], desc));
        break;
      case 'traffic':
        data = data.sort((a: Beach, b: Beach) => this.integerCriteria(a.traffic, b.traffic));
        break;
      case 'weather':
        data = data.sort((a: Beach, b: Beach) =>
          this.integerCriteria(a.weather.data[0].clouds, b.weather.data[0].clouds)
        );
        break;
    }

    return data;
  };

  booleanCriteria = (a: boolean, b: boolean, desc: boolean = true) => {
    const first = a ? 1 : 0;
    const second = b ? 1 : 0;

    return desc ? first - second : second - first;
  };

  integerCriteria = (a: number, b: number, desc: boolean = true) => desc ? a - b : b - a;
}
