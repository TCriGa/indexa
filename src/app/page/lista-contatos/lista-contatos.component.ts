import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CabecalhoComponent } from '../../component/cabecalho/cabecalho.component';
import { ContainerComponent } from '../../component/container/container.component';
import { ContatoComponent } from '../../component/contato/contato.component';
import { SeparadorComponent } from '../../component/separador/separador.component';

interface Contato {
  id: number;
  nome: string;
  telefone: string;
}

import agenda from '../../agenda.json';

@Component({
  selector: 'app-lista-contatos',
  standalone: true,
  imports: [
    ContainerComponent,
    CabecalhoComponent,
    SeparadorComponent,
    ContatoComponent,
    FormsModule,
  ],
  templateUrl: './lista-contatos.component.html',
  styleUrl: './lista-contatos.component.css',
})
export class ListaContatosComponent {
  alfabeto: string = 'abcdefghijklmnopqrstuvwxyz';
  contatos: Contato[] = agenda;
  filtraPorTexto: string = '';

  removeAcentos(texto: string): string {
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }
  filtraContatoPorTexto(): Contato[] {
    if (!this.filtraPorTexto) {
      return this.contatos;
    }
    return this.contatos.filter((contato) => {
      return this.removeAcentos(contato.nome)
        .toLowerCase()
        .includes(this.removeAcentos(this.filtraPorTexto).toLowerCase());
    });
  }
  filtrarContatosPorLetraInicial(letra: string): Contato[] {
    return this.filtraContatoPorTexto().filter((contato) => {
      return this.removeAcentos(contato.nome)
        .toLowerCase()
        .startsWith(this.removeAcentos(letra).toLowerCase());
    });
  }
}
