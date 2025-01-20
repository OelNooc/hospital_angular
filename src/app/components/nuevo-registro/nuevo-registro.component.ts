import { Component } from '@angular/core';
import { PacienteService } from '../../services/paciente.service';
import { Paciente } from '../../models/paciente';
import { FileUploader } from 'ng2-file-upload';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FileUploadModule } from 'ng2-file-upload';

@Component({
  selector: 'app-nuevo-registro',
  templateUrl: './nuevo-registro.component.html',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    FileUploadModule
  ]
})
export class NuevoRegistroComponent {
  paciente: Paciente = new Paciente();
  uploader: FileUploader = new FileUploader({
    url: 'https://api-ejemplo.com/upload',
    allowedFileType: ['image'],
    maxFileSize: 20 * 1024 * 1024,
  });

  constructor(private pacienteService: PacienteService) {}

  guardarPaciente() {
    if (!this.paciente.rut || !this.paciente.nombre || !this.paciente.edad) {
      alert('Todos los campos son obligatorios.');
      return;
    }
    this.pacienteService.agregarPaciente(this.paciente).subscribe(() => {
      alert('Registro exitoso');
    });
  }
}
