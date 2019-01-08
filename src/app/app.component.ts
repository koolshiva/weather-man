import { Component } from '@angular/core';

import {CoordinateModel} from './app.coordinateModel';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [WeatherService]
})
export class AppComponent {

  temperature: string = null;
  location: string = null;

  constructor(private weatherService: WeatherService) {}

  coordinatesEvent(coordinateModel: CoordinateModel) {
    console.log(`lat is ${coordinateModel.latitude} and long is ${coordinateModel.longitude}`);
    this.weatherService.getWeatherData(coordinateModel.latitude, coordinateModel.longitude).subscribe((data) => {
      console.log(data['location']);
      this.temperature = Number.parseFloat(data['temperate']).toFixed(1); //(data['temperature'] !== undefined) ? data['temperate'] : '';
      this.location = data['location']; //(data['temperature'] !== undefined) ? data['temperate'] : '';
    });
  }
}
