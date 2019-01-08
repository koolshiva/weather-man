import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import {CoordinateModel} from '../../app.coordinateModel';
@Component({
  selector: 'app-coordinates',
  templateUrl: './coordinates.component.html',
  styleUrls: ['./coordinates.component.css']
})
export class CoordinatesComponent implements OnInit {

  @Output() coordinatesEvent = new EventEmitter<{latitude: string, longitude: string}>();
  appLatitude = '';
  appLongitude = '';
  appLatitudeValid = false;
  appLongitudeValid = false;

  constructor() { }

  ngOnInit() {
  }

  setCoordinates(latElement, longElement) {
    if (latElement || longElement) {
      alert('enter valid coordinates');
      return;
    }
    this.coordinatesEvent.emit({latitude: this.appLatitude.toString(), longitude: this.appLongitude.toString()});
  }

}
