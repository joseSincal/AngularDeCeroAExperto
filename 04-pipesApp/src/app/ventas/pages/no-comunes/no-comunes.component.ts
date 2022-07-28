import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [],
})
export class NoComunesComponent {
  // para i18nSelect
  nombre: string = 'Jose';
  genero: string = 'masculino';
  invitacionMapa = {
    masculino: 'invitarlo',
    femenino: 'invitarla',
  };

  // para i18nPlural
  clientes: string[] = ['Maria', 'Pedro', 'Hernando', 'Eduardo', 'Fernando'];
  clientesMapa = {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos 2 clientes esperando',
    other: 'tenemos # clientes esperando',
  };

  cambiarPersona() {
    if (this.genero === 'masculino') {
      this.genero = 'femenino';
      this.nombre = 'Heidy';
    } else {
      this.genero = 'masculino';
      this.nombre = 'Jose';
    }
  }

  borrarCliente() {
    this.clientes.pop();
  }

  // para keyValue Pipe
  persona = {
    nombre: 'Jose',
    edad: 23,
    direccion: 'Patzun, Chimaltenango',
  };

  //para json Pipe
  heroes = [
    {
      nomnre: 'Superman',
      vuela: true,
    },
    {
      nomnre: 'Robin',
      vuela: false,
    },
    {
      nomnre: 'Aquaman',
      vuela: false,
    },
  ];

  //para Async Pipe
  miObservable = interval(2000);

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de promesa');
    }, 3500);
  });
}
