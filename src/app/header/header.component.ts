import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `<header>
    <div class="container">
      <div class="row">
        <div class="col-sm-12 p-flex p-flex-align-center p-flex-jc-sb">
          <ul>
            <input
              type="checkbox"
              class="openSidebarMenu"
              id="openSidebarMenu"
            />
            <label for="openSidebarMenu" class="sidebarIconToggle">
              <div class="spinner diagonal part-1"></div>
              <div class="spinner horizontal"></div>
              <div class="spinner diagonal part-2"></div>
            </label>
            <div id="sidebarMenu">
              <div class="main-content-wrapper">
                <a
                  href=""
                  [routerLink]="['/']"
                  [routerLinkActive]="['is-active']"
                  >Home</a
                >
                <a
                  href=""
                  [routerLink]="['/about']"
                  [routerLinkActive]="['is-active']"
                  >About</a
                >
                <a
                  href=""
                  [routerLink]="['/portfolio']"
                  [routerLinkActive]="['is-active']"
                  >Portfolio</a
                >
                <a
                  href=""
                  [routerLink]="['/reach']"
                  [routerLinkActive]="['is-active']"
                  >Reach</a
                >
              </div>
            </div>
            <li></li>
            <li class="time">
              <div class="weather-box">
                <div class="weather-icon">
                  <i class="fas fa-sun"></i>
                </div>
                <div class="weather-info">
                  <p>
                    {{ tiempo.location['country'] }} /
                    {{ tiempo.location['name'] }}
                  </p>
                  <p>{{ tiempo.location['localtime'].substring(10, 16) }}</p>
                </div>
              </div>
            </li>
          </ul>
          <ul>
            <li class="time2">
              <div class="weather-box">
                <div class="weather-icon">
                  <i class="fas fa-sun"></i>
                </div>
                <div class="weather-info">
                  <p>
                    {{ tiempo.location['country'] }} /
                    {{ tiempo.location['name'] }}
                  </p>
                  <p>{{ tiempo.location['localtime'].substring(10, 16) }}</p>
                </div>
              </div>
            </li>
            <li class="ul-items">
              <a href="" [routerLink]="['/']" [routerLinkActive]="['is-active']"
                >Home</a
              >
            </li>
            <li class="ul-items">
              <a
                href=""
                [routerLink]="['/about']"
                [routerLinkActive]="['is-active']"
                >About</a
              >
            </li>
            <li class="ul-items">
              <a
                href=""
                [routerLink]="['/portfolio']"
                [routerLinkActive]="['is-active']"
                >Portfolio</a
              >
            </li>
            <li class="ul-items">
              <a
                href=""
                [routerLink]="['/reach']"
                [routerLinkActive]="['is-active']"
                >Reach</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>`,
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  cities = [
    'Paris',
    'New York',
    'Rome',
    'Tokyo',
    'Benicarlo',
    'Barcelona',
    'London',
    'Sydney',
    'Rio de Janeiro',
    'Dubai',
  ];
  currentCityIndex = 0;
  tiempo: any; // Variable para almacenar los datos del tiempo actual

  constructor() {}

  ngOnInit() {
    // Llamar a la función para obtener el tiempo inicial
    this.getWeatherByCity(this.cities[this.currentCityIndex]);

    // Cambiar la ciudad cada 3 segundos
    setInterval(() => {
      this.currentCityIndex = (this.currentCityIndex + 1) % this.cities.length;
      this.getWeatherByCity(this.cities[this.currentCityIndex]);
    }, 3000);
  }

  getWeatherByCity(city: string) {
    var apiKey = '5986d2a7b3d74488904163017232105'; // Reemplaza esto con tu propia API key
    var apiUrl = 'https://api.weatherapi.com/v1/current.json';

    fetch(`${apiUrl}?key=${apiKey}&q=${city}`)
      .then((response) => response.json())
      .then((data) => {
        this.tiempo = data;
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
