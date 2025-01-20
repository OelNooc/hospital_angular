import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PacienteService } from '../../services/paciente.service';
import { Paciente } from '../../models/paciente';

@Component({
  selector: 'app-listar-registro',
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './listar-registro.component.html',
  styleUrl: './listar-registro.component.css'
})
export class ListarRegistroComponent {
  pacientes: Paciente[] = [];

  constructor(private pacienteService: PacienteService) {
    this.pacienteService.obtenerPacientes().subscribe((data) => {
      this.pacientes = data;
    });
  }
}
