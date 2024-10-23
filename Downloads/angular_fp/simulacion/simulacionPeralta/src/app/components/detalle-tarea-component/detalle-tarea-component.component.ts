import { Component } from '@angular/core';
import { Tarea } from '../../models/tarea';

@Component({
  selector: 'app-detalle-tarea-component',
  standalone: true,
  imports: [],
  templateUrl: './detalle-tarea-component.component.html',
  styleUrl: './detalle-tarea-component.component.scss'
})
export class DetalleTareaComponentComponent {
  mostrarDetalles(tarea : Tarea){
    tarea.mostrarDetalles = !this.mostrarDetalles;
  }
}
