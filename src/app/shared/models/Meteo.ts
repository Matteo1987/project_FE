export interface CurrentWeather {
  data: Array<Weather>;
  count: number;
}

export interface ForecastWeather {
  data: Array<Weather>;
  city_name: string;
  lon: string;
  timezone: string;
  lat: string;
  country_code: string;
  state_code: number;
}

interface Weather {
  wind_cdir: string;
  rh: number;
  pod: string;
  lon: string;
  pres: number;
  timezone: string;
  ob_time: Date;
  country_code: string;
  clouds: number;
  vis: number;
  wind_spd: number;
  wind_cdir_full: string;
  app_temp: number;
  state_code: string;
  ts: number;
  h_angle: number;
  dewpt: number;
  weather: WeatherDetails;
  uv: number;
  aqi: number;
  station: string;
  wind_dir: number;
  elev_angle: number;
  datetime: string;
  precip: number;
  ghi: number;
  dni: number;
  dhi: number;
  solar_rad: number;
  city_name: string;
  sunrise: string;
  sunset: string;
  temp: number;
  lat: string;
  slp: number;
}

interface WeatherDetails {
  icon: string;
  code: string;
  description: string;
}
