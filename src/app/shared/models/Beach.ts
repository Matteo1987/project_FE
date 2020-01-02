import {CurrentWeather} from './Meteo';

export interface Beach {
  id?: number;
  name?: string;
  city?: string;
  province?: string;
  latitude?: number;
  longitude?: number;
  orientation?: string;
  park?: boolean;
  food_service?: boolean;
  lifeguard?: boolean;
  dogs_allowed?: boolean;
  summer_crowding?: boolean;
  tobacconist?: boolean;
  disabled_access?: boolean;
  sunbed_umbrella?: boolean;
  wifi?: boolean;
  first_aid?: boolean;
  toilet?: boolean;
  showers?: boolean;
  photo?: string;
  weatherIcon?: string;
  weather: CurrentWeather;
  traffic?: number;
  beach_type?:string;
}

export const Orientation = {
  Nord: 'Nord',
  Sud: 'Sud',
  Ovest: 'Ovest',
  Est: 'Est',
};

export const BeachType = {
  
  fine_sand: "Sabbia fine",
  rough_sand : "Sabbia grossa",
  partially_rocky : "Parzialmente rocciosa",
  totally_rocky: "Totalmente rocciosa"
};
