import { Component, OnInit } from '@angular/core';
import { IWeather } from './interfaces/weather';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private weatherService: WeatherService) { }

  weatherData?: IWeather;

  ngOnInit(): void {
    this.weatherService.getWeatherData().subscribe(data => {
      this.weatherData = data;
      console.log(data);
    }
    )
  }
  title = 'far-fon';
}
