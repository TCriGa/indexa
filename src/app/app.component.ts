import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContainerComponent } from './component/container/container.component';
import { CabecalhoComponent } from './component/cabecalho/cabecalho.component';
import { SeparadorComponent } from './component/separador/separador.component';
import { ContatoComponent } from './component/contato/contato.component';

interface Contato {
  id: number;
  nome: string;
  telefone: string;
}

import agenda from './agenda.json';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    RouterOutlet,
    ContainerComponent,
    CabecalhoComponent,
    SeparadorComponent,
    ContatoComponent,
    FormsModule,
  ],
})
export class AppComponent {
  alfabeto: string = 'abcdefghijklmnopqrstuvwxyz';
  contatos: Contato[] = agenda;
  filtraPorTexto: string = '';

  filtraContatoPorTexto(): Contato[] {
    if (!this.filtraPorTexto) {
      return this.contatos;
    }
    return this.contatos.filter((contato) => {
      return contato.nome
        .toLowerCase()
        .includes(this.filtraPorTexto.toLowerCase());
    });
  }
  filtrarContatosPorLetraInicial(letra: string): Contato[] {
    return this.filtraContatoPorTexto().filter((contato) => {
      return contato.nome.toLowerCase().startsWith(letra);
    });
  }
}
