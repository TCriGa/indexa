import { Component } from '@angular/core';
import { ContainerComponent } from '../../component/container/container.component';

@Component({
  selector: 'app-perfil-contato',
  standalone: true,
  templateUrl: './perfil-contato.component.html',
  styleUrl: './perfil-contato.component.css',
  imports: [ContainerComponent],
})
export class PerfilContatoComponent {}
