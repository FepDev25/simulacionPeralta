import { Injectable } from '@angular/core';
import { Operacion } from '../models/operacion';

@Injectable({
  providedIn: 'root'
})
export class OperacionesServicioService  {
  private operaciones : Operacion[] = [];

  constructor() {
    if (this.estaEnElNavegador()){
      this.cargarOperaciones();
    }
   }

  private estaEnElNavegador(): boolean {
    return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
  }

  public guardarOperaciones(){
    if (this.estaEnElNavegador()){
      localStorage.setItem('operaciones', JSON.stringify(this.operaciones));
    }
  }


  private cargarOperaciones(){
    if (this.estaEnElNavegador()){
      const operacionesGuardadas = localStorage.getItem('operaciones');
      if (operacionesGuardadas){
        this.operaciones = JSON.parse(operacionesGuardadas);
      }
    }
  }

  agregarOperaciones(tarea: Operacion) {
    this.operaciones.push(tarea);
    this.guardarOperaciones();
  }
  

  getOperaciones() : Operacion [] {
    return this.operaciones;
  }
}