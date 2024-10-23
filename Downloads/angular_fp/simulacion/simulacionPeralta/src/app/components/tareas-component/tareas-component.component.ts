import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { TareaServiceService } from '../../services/tarea-service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tarea } from '../../models/tarea';
import { DetalleTareaComponentComponent } from '../detalle-tarea-component/detalle-tarea-component.component';

@Component({
  selector: 'app-tareas-component',
  standalone: true,
  imports: [CommonModule, FormsModule, DetalleTareaComponentComponent],
  templateUrl: './tareas-component.component.html',
  styleUrl: './tareas-component.component.scss'
})
export class TareasComponentComponent implements OnInit{
  @ViewChild('nombre') nombre!: ElementRef;
  @ViewChild('descripcion') descripcion!: ElementRef;
  

  constructor(private tareaService : TareaServiceService){}

  // Listado

  tareas : Tarea[] = [];


  agregarTarea(){
    const nombreIngresado = this.nombre.nativeElement.value;
    const descripcion = this.descripcion.nativeElement.value;

    let tarea = new Tarea(true, nombreIngresado, descripcion);

    this.tareaService.agregarTarea(tarea);
    this.limpiarCampos();
  }


  ngOnInit(): void {
      this.tareas = this.tareaService.getTareas();
  }

  limpiarCampos(){
    this.nombre.nativeElement.value = '';
    this.descripcion.nativeElement.value = '';
  }


  mostrarDetalles(tarea : Tarea){
    tarea.mostrarDetalles = !tarea.mostrarDetalles;
  }

  elimiarTarea(tarea : Tarea){
    const index = this.tareas.findIndex(t => t.id === tarea.id);
    if (index != -1){
      this.tareas.splice(index, 1);
      this.tareaService.guardarTareas();
    }
  }
}
