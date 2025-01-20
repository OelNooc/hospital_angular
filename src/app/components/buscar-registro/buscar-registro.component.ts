import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-buscar-registro',
  imports: [
    FormsModule
  ],
  templateUrl: './buscar-registro.component.html',
  styleUrl: './buscar-registro.component.css'
})
export class BuscarRegistroComponent {
  searchQuery: string = '';

  constructor(private router: Router) {}

  buscar() {
    if (this.searchQuery.trim()) {
      this.router.navigate(['/registro/buscar', this.searchQuery]);
    } else {
      alert('Por favor, ingrese un criterio de búsqueda.');
    }
  }
}
