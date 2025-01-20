import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router';
import { PacienteService } from '../../services/paciente.service';
import { Paciente } from '../../models/paciente';

@Component({
  selector: 'app-detalle-registro',
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './detalle-registro.component.html',
  styleUrl: './detalle-registro.component.css'
})
export class DetalleRegistroComponent {
  paciente: Paciente | null = null;

  constructor(
    private route: ActivatedRoute,
    private pacienteService: PacienteService,
    private router: Router
  ) {
    this.route.params.subscribe((params) => {
      this.pacienteService.obtenerPaciente(params['id']).subscribe((data) => {
        this.paciente = data;
      });
    });
  }

  eliminarRegistro() {
    if (confirm('¿Está seguro de que desea eliminar este registro?')) {
      this.pacienteService.eliminarPaciente(this.paciente!.rut).subscribe(() => {
        this.router.navigate(['/registro/listar']);
      });
    }
  }
}