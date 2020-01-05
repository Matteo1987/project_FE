import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BeachService} from '../../../shared/services/beaches.service';
import {Beach, BeachType} from '../../../shared/models/Beach';
import {CurrentWeather} from '../../../shared/models/Meteo';
import {Traffic} from '../../../shared/models/Traffic';
import {WeatherService} from '../../../shared/services/weather.service';
import {TrafficService} from '../../../shared/services/traffic.service';
import { APP_BASE_HREF } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

declare var ol: any;

@Component({
  selector: 'app-beach-detail',
  templateUrl: './beach-detail.component.html',
  styleUrls: ['./beach-detail.component.css'],
})
export class BeachDetailComponent implements OnInit {
  [x: string]: any;
  
  beach: Beach;
  beachtype = BeachType;
  latitude = 40;
  longitude = 9;
  map: any;
  mapDestinationUrl: SafeResourceUrl;

  constructor(
    private sanitizer: DomSanitizer,
    private route: ActivatedRoute,
    private router: Router,
    private beachService: BeachService,
    private weatherService: WeatherService,
    // private trafficService: TrafficService
  ) {
  }

  ngOnInit() {
    this.map = new ol.Map({
      target: 'map',
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        })
      ],
      view: new ol.View({       
        center: ol.proj.fromLonLat([ this.longitude, this.latitude ]),
        zoom: 8
      })
      
    });
    this.getBeachDetail(this.route.snapshot.params.id);


  }

  setCenter() {
    var lat=this.beach.latitude;
    var lng=this.beach.longitude;

    var view = this.map.getView();
    view.setCenter(ol.proj.fromLonLat([lng, lat]));
    view.setZoom(13);

    var vectorLayer = new ol.layer.Vector({
      source: new ol.source.Vector({
        features: [new ol.Feature({
          geometry: new ol.geom.Point(ol.proj.transform([lng, lat], 'EPSG:4326', 'EPSG:3857')),
        })]
      }),
      style: new ol.style.Style({
        image: new ol.style.Icon({
          anchor: [0.5, 0.5],
          scale: 0.1,
          anchorXUnits: "fraction",
          anchorYUnits: "fraction",
          src: "assets/img/my-icon.png"
        })
      })
    });
    this.map.addLayer(vectorLayer);
    
  }

  getBeachDetail(id) {
    this.beachService.getBeachById(id)
      .subscribe((data: Beach) => {
        this.beach = data;
        this.getWeather();
        this.setCenter();
        this.mapDestinationUrl = this.getMapIframeSrc();
        // this.getTraffic();
      });
  }

  deleteBeach(id) {
    this.beachService.deleteBeach(id)
      .subscribe(data => {
        this.router.navigate(['/beaches']);
      }, (err) => {
        console.log(err);
      });
  }

  getWeather = () => {
    this.weatherService.getCurrent(this.beach.city, this.beach.latitude, this.beach.longitude)
      .subscribe((weather: CurrentWeather) => {
        this.beach.weatherIcon = this.getWeatherIconPath(weather.data[0].weather.icon);
      }, err => {
        console.error(err);
      });
  };

  addPoint(lat: number = this.beach.latitude, lng: number = this.beach.longitude) {
    var vectorLayer = new ol.layer.Vector({
      source: new ol.source.Vector({
        features: [new ol.Feature({
          geometry: new ol.geom.Point(ol.proj.transform([this.latitude, this.longitude ], 'EPSG:4326', 'EPSG:3857')),
        })]
      }),
      style: new ol.style.Style({
        image: new ol.style.Icon({
          anchor: [0.5, 0.5],
          anchorXUnits: "fraction",
          anchorYUnits: "fraction",
          src: "assets/img/my-icon.png"
        })
      })
    });
    this.map.addLayer(vectorLayer);
    }

/*  getTraffic = () => {
    this.trafficService.getTraffic(this.beach.city)
      .subscribe((traffic: Traffic) => {
        if (traffic) {
          this.beach.traffic = traffic.value;
        }
      }, err => {
        console.error(err);
      });
  };*/

  getWeatherIconPath = (icon: string): string => `https://www.weatherbit.io/static/img/icons/${icon}.png`;
  // getTrafficClass = (value: number) => value >= 80 ? 'bg-danger' : (value > 70 && value < 80 ? 'bg-warning' : 'bg-success');
  getInfoClass = (value: boolean) => value ? 'fa-check-circle text-success' : 'fa-times-circle text-danger';
  getEnabledClass = (value: boolean) => value ? 'text-success' : '';
  getBeachType = (value:string) => this.beachtype[value];
  getMapIframeSrc = () => this.sanitizer.bypassSecurityTrustResourceUrl(`https:www.google.com/maps/embed/v1/directions?key=AIzaSyDBl453JPQafg3ImRdNI01PYkxRrzVSDQw&origin=Cagliari+Italy&destination=${this.beach.latitude},${this.beach.longitude}`);
  
  }



  