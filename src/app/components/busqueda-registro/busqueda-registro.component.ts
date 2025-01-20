import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PacienteService } from '../../services/paciente.service';
import { Paciente } from '../../models/paciente';

@Component({
  selector: 'app-busqueda-registro',
  imports: [
    CommonModule
  ],
  templateUrl: './busqueda-registro.component.html',
  styleUrl: './busqueda-registro.component.css'
})
export class BusquedaRegistroComponent {
  resultados: Paciente[] = [];

  constructor(
    private route: ActivatedRoute,
    private pacienteService: PacienteService
  ) {
    this.route.params.subscribe((params) => {
      this.pacienteService.buscarPacientes(params['search']).subscribe((data) => {
        this.resultados = data;
      });
    });
  }
}
