import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  public userLocation?: [number, number];

  get isUserLocationReady(): boolean {
    return !!this.userLocation;
  }

  constructor(private http: HttpClient) {
    this.getUserLocation();
  }

  public async getUserLocation(): Promise<[number, number]> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        ({ coords }) => {
          this.userLocation = [coords.longitude, coords.latitude];
          resolve(this.userLocation);
        },
        (err) => {
          alert('No se pudo obtener la geolocalizacion');
          console.log(err);
          reject();
        }
      );
    });
  }

  getPlacesByQuery(query: string = '') {
    this.http
      .get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?country=gt&proximity=ip&types=place%2Cpostcode%2Caddress&language=es&access_token=pk.eyJ1Ijoiam9zc2l0bzAyIiwiYSI6ImNsN2dyYXo5YzAxYnozdW05MG4xZmZwMWQifQ.x2Qq3gHXN8ZZabDYEOLt2A`
      )
      .subscribe(console.log);
  }
}
