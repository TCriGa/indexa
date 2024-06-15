import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormContatoComponent } from './page/form-contato/form-contato.component';
import { ListaContatosComponent } from './page/lista-contatos/lista-contatos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    RouterOutlet,
    FormContatoComponent,
    FormContatoComponent,
    ListaContatosComponent,
  ],
})
export class AppComponent {}
