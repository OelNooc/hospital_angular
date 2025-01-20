import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PacienteService } from '../../services/paciente.service';
import { Paciente } from '../../models/paciente';

@Component({
  selector: 'app-listar-registros',
  imports: [
    CommonModule
  ],
  templateUrl: './listar-registros.component.html',
  styleUrl: './listar-registros.component.css'
})
export class ListarRegistrosComponent {
  pacientes: Paciente[] = [];

  constructor(private pacienteService: PacienteService) {
    this.pacienteService.obtenerPacientes().subscribe((data) => {
      this.pacientes = data;
    });
  }
}