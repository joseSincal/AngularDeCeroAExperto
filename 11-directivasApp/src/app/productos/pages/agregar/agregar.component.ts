import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [],
})
export class AgregarComponent {
  texto1: string = 'Jose Sincal';

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', Validators.required],
  });

  constructor(private fb: FormBuilder) {}

  tieneError(campo: string): boolean {
    return this.miFormulario.get(campo)?.invalid || false;
  }

  cambiarNombre() {
    this.texto1 = 'Juan Carlos';
  }
}
