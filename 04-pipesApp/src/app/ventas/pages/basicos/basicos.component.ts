import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [],
})
export class BasicosComponent {
  nombreLower: string = 'jose';
  nombreUpper: string = 'JOSE';
  nombreCompleto: string = 'joSe SinCAl';
}
