import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  weatherStats: object = null;

  constructor(private httpCLient: HttpClient) { }

  public getWeatherData(lat, long) {
    return this.httpCLient.get(`http://localhost:3000/weather-data?lat=${lat}&long=${long}`);
  }
}
