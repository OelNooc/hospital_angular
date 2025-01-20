import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PacienteService } from '../../services/paciente.service';
import { Paciente } from '../../models/paciente';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-actualizar-registro',
  imports: [
    FormsModule
  ],
  templateUrl: './actualizar-registro.component.html',
  styleUrl: './actualizar-registro.component.css'
})
export class ActualizarRegistroComponent {

  paciente: Paciente = new Paciente();
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

  actualizarPaciente() {
    if (this.paciente.rut && this.paciente.nombre && this.paciente.edad && this.paciente.sexo && this.paciente.enfermedad) {
      this.pacienteService.actualizarPaciente(this.paciente.rut, this.paciente).subscribe(() => {
        this.router.navigate(['/registro/listar']);
      });
    } else {
      alert('Por favor, complete todos los campos.');
    }
  }
}
