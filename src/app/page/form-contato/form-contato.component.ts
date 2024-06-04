import { Component } from '@angular/core';
import { ContainerComponent } from '../../component/container/container.component';
import { SeparadorComponent } from '../../component/separador/separador.component';

@Component({
  selector: 'app-form-contato',
  standalone: true,
  templateUrl: './form-contato.component.html',
  styleUrl: './form-contato.component.css',
  imports: [ContainerComponent, SeparadorComponent],
})
export class FormContatoComponent {}
