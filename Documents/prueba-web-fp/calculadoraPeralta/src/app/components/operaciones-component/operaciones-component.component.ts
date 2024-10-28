import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { OperacionesServicioService } from '../../services/operaciones-servicio.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Operacion } from '../../models/operacion';

@Component({
  selector: 'app-operaciones-component',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './operaciones-component.component.html',
  styleUrl: './operaciones-component.component.scss'
})
export class OperacionesComponentComponent implements OnInit {
  @ViewChild('primero') primero!: ElementRef;
  @ViewChild('segundo') segundo!: ElementRef;

  constructor(private servicio : OperacionesServicioService){}

  operaciones : Operacion[] = [];

  ngOnInit(): void {
      this.operaciones = this.servicio.getOperaciones();
  }

  addOperacion(){
    const primerNumero = Number.parseInt(this.primero.nativeElement.value);
    const segundoNumero =  Number.parseInt(this.segundo.nativeElement.value);

    const suma = primerNumero + segundoNumero;
    const resta = primerNumero - segundoNumero;
    const multi = primerNumero * segundoNumero;
    const div = primerNumero / segundoNumero;

    let operacion = new Operacion(primerNumero, segundoNumero, suma, resta, multi, div);

    this.servicio.agregarOperaciones(operacion);
    this.limpiarCampos();
  }

  limpiarCampos(){
    this.primero.nativeElement.value = '';
    this.segundo.nativeElement.value = '';
  }

  removeOp(operacion : Operacion){
    const index = this.operaciones.findIndex(t => t.id === operacion.id);
    if (index != -1){
      this.operaciones.splice(index, 1);
      this.servicio.guardarOperaciones();
    }
  }
}
