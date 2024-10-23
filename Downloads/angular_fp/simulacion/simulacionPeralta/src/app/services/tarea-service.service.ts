import { Injectable } from '@angular/core';
import { Tarea } from '../models/tarea';

@Injectable({
  providedIn: 'root'
})
export class TareaServiceService {
  private tareas : Tarea[] = [];

  constructor() {
    if (this.estaEnElNavegador()){
      this.cargarTareas();
    }
   }

  private estaEnElNavegador(): boolean {
    return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
  }

  public guardarTareas(){
    if (this.estaEnElNavegador()){
      localStorage.setItem('tareas', JSON.stringify(this.tareas));
    }
  }


  private cargarTareas(){
    if (this.estaEnElNavegador()){
      const tareasGuardadas = localStorage.getItem('tareas');
      if (tareasGuardadas){
        this.tareas = JSON.parse(tareasGuardadas);
      }
    }
  }

  agregarTarea(tarea: Tarea) {
    this.tareas.push(tarea);
    this.guardarTareas();
  }
  

  getTareas() : Tarea [] {
    return this.tareas;
  }
}
