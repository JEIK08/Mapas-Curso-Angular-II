import { Component } from '@angular/core';
import { MapasService } from './services/mapas.service';
import { Marcador } from './interfaces/marcador';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  private lat: number = 10.1400266;
  private lng: number = -75.2273676;
  private zoom: number = 15;

  private marcadorSel: any;

  constructor(private mapasService: MapasService){
    this.marcadorSel = null;
    this.mapasService.cargarMarcadores();
  }

  clickMapa(evento: any){
  	let marcador: Marcador = {
  		lat: evento.coords.lat,
  		lng: evento.coords.lng,
  		titulo: 'Sin Título',
  		draggable: true
  	}
  	this.mapasService.insertarMarcador(marcador);
  	console.log(evento);
  }

  arrastrar(m: Marcador, evento: any){
    m.lat = evento.coords.lat;
    m.lng = evento.coords.lng
    this.mapasService.guardarMarcadores();
  }

  seleccionar(m: Marcador){
    this.marcadorSel = m;
  }

  guardarCambios(){
    this.mapasService.guardarMarcadores();
    this.marcadorSel = null;
  }

  borrarMarcador(i: number){
    this.marcadorSel = null;
    this.mapasService.borrarMarcador(i);
  }

}
