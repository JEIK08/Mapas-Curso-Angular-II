import { Injectable } from '@angular/core';

import { Marcador } from '../interfaces/marcador';

@Injectable()
export class MapasService {

	private marcadores: Marcador[];

  constructor() {
    this.cargarMarcadores();
  	let nuevoMarcador: Marcador = {
  		lat: 10.1400266,
  		lng: -75.2273676,
  		titulo: 'Malagana',
  		draggable: true
  	}
  	this.marcadores.push(nuevoMarcador);
  }

  insertarMarcador(marcador: Marcador){
  	this.marcadores.push(marcador);
    this.guardarMarcadores();
  }

  borrarMarcador(i: number){
    this.marcadores.splice(i,1);
    this.guardarMarcadores();
  }

  guardarMarcadores(){
    localStorage.setItem('marcadores', JSON.stringify(this.marcadores));
  }

  cargarMarcadores(){
    if(localStorage.getItem('marcadores')){
      this.marcadores = JSON.parse(localStorage.getItem('marcadores'));
    }else{
      this.marcadores = [];
    }
  }

}
