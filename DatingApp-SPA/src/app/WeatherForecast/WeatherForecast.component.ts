import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-WeatherForecast',
  templateUrl: './WeatherForecast.component.html',
  styleUrls: ['./WeatherForecast.component.css']
})
export class WeatherForecastComponent implements OnInit {

  WeatherForecast: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getWeather();
  }
  getWeather()
  {
    this.http.get('https://localhost:44370/weatherforecast')
    .subscribe(response => {
      this.WeatherForecast = response;
    }, error => {
      console.log(error);
    });
  }

}
