import {Component, OnInit} from '@angular/core';
import {BeachService} from '../../../shared/services/beaches.service';
import {Beach} from '../../../shared/models/Beach';
import {WeatherService} from '../../../shared/services/weather.service';
import {CurrentWeather} from '../../../shared/models/Meteo';
import {TrafficService} from '../../../shared/services/traffic.service';
import {Traffic} from '../../../shared/models/Traffic';
import {Router} from '@angular/router';
import {SortService} from '../../../shared/services/sort.service';

@Component({
  selector: 'app-beaches-list',
  templateUrl: './beaches-list.component.html',
  styleUrls: ['./beaches-list.component.css']
})
export class BeachesListComponent implements OnInit {
  beaches: Array<Beach> = [];
  radioValue = 'park';
  loaded = false;

  constructor(
    private sortService: SortService,
    private beachService: BeachService,
    private weatherService: WeatherService,
    private trafficService: TrafficService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.loadComponent();
  }

  loadComponent = () => {
    this.beachService.getBeaches()
      .subscribe((resBeaches: Array<Beach>) => {
          for (const beach of resBeaches) {
            this.getWeather(beach);
            // this.getTraffic(beach);
            this.sortBeaches();
          }

          this.beaches = resBeaches;
          this.loaded = true;
        }, err => {
          console.error(err);
          this.loaded = true;
        }
      );
  };

  getWeather = (beach: Beach) => {
    this.weatherService.getCurrent(beach.city, beach.latitude, beach.longitude)
      .subscribe((weather: CurrentWeather) => {
        beach.weatherIcon = this.getWeatherIconPath(weather.data[0].weather.icon);
        beach.weather = weather;
      }, err => {
        console.error(err);
      });
  };

/*
  getTraffic = (beach: Beach) => {
    this.trafficService.getTraffic(beach.city)
      .subscribe((traffic: Traffic) => {
        if (traffic) {
          beach.traffic = traffic.value;
        }
      }, err => {
        console.error(err);
      });
  };
*/

  radioChange = () => {
    this.sortBeaches();
  };

  sortBeaches = () => {
    this.beaches = this.sortService.getSortedData(this.beaches, this.radioValue);
  };

  getWeatherIconPath = (icon: string): string => `https://www.weatherbit.io/static/img/icons/${icon}.png`;
  // getTrafficClass = (value: number) => value >= 80 ? 'bg-danger' : (value > 70 && value < 80 ? 'bg-warning' : 'bg-success');
  goToDetails = (id: number) => this.router.navigate([`beaches/details/${id}`]);
  getInfoClass = (value: boolean) => value ? 'fa-check-circle text-success' : 'fa-times-circle text-danger';
  getOrientationArrow = (orientation: string) => {
    let direction;

    switch (orientation) {
      case 'Nord': direction = 'up';
        break;
      case 'Sud': direction = 'down';
        break;
      case 'Est': direction = 'right';
        break;
      case 'Ovest': direction = 'left';
        break;
    }

    return `fa-arrow-alt-circle-${direction}`;
  };
}
