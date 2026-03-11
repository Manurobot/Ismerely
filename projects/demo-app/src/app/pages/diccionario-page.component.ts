import { Component } from '@angular/core';
import { MiPaquete } from 'mi-paquete';

@Component({
  selector: 'app-diccionario-page',
  standalone: true,
  imports: [MiPaquete],
  template: `<lib-mi-paquete />`,
})
export class DiccionarioPageComponent {}
