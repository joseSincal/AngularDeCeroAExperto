import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Map, Popup, Marker } from 'mapbox-gl';
import { MapService, PlacesService } from '../../services';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css'],
})
export class MapViewComponent implements AfterViewInit {
  @ViewChild('mapDiv')
  mapdivElement!: ElementRef;

  constructor(
    private placesServices: PlacesService,
    private mapService: MapService
  ) {}

  ngAfterViewInit(): void {
    if (!this.placesServices.userLocation)
      throw Error('No hay placesServices.userLocation');

    const map = new Map({
      container: this.mapdivElement.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: this.placesServices.userLocation,
      zoom: 14,
    });

    const popup = new Popup().setHTML(`
          <h6>Aqui estoy</h6>
          <span>Estoy en este lugar del mundo</span>
      `);

    new Marker({
      color: 'red',
    })
      .setLngLat(this.placesServices.userLocation)
      .setPopup(popup)
      .addTo(map);

    this.mapService.setMap(map);
  }
}
