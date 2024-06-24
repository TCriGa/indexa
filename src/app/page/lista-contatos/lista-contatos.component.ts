import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CabecalhoComponent } from '../../component/cabecalho/cabecalho.component';
import { ContainerComponent } from '../../component/container/container.component';
import { ContatoComponent } from '../../component/contato/contato.component';
import { SeparadorComponent } from '../../component/separador/separador.component';
import { ContatoService } from '../../services/contato.service';

interface Contato {
  id: number;
  nome: string;
  telefone: string;
}

import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-lista-contatos',
  standalone: true,
  imports: [
    ContainerComponent,
    CabecalhoComponent,
    SeparadorComponent,
    ContatoComponent,
    FormsModule,
    RouterLink,
  ],
  templateUrl: './lista-contatos.component.html',
  styleUrl: './lista-contatos.component.css',
})
export class ListaContatosComponent implements OnInit {
  alfabeto: string = 'abcdefghijklmnopqrstuvwxyz';
  contatos: Contato[] = [];

  filtraPorTexto: string = '';

  constructor(private contatoService: ContatoService) {}
  ngOnInit() {
    this.contatos = this.contatoService.obterContatos();
  }

  removerAcentos(texto: string): string {
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }
  filtrarContatosPorTexto(): Contato[] {
    if (!this.filtraPorTexto) {
      return this.contatos;
    }
    return this.contatos.filter((contato) => {
      // Compara os nomes sem acentuações
      return this.removerAcentos(contato.nome)
        .toLowerCase()
        .includes(this.removerAcentos(this.filtraPorTexto).toLowerCase());
    });
  }
  filtrarContatosPorLetraInicial(letra: string): Contato[] {
    return this.filtrarContatosPorTexto()?.filter((contato) => {
      // Compara a letra inicial sem considerar acentuações
      return this.removerAcentos(contato.nome)
        .toLowerCase()
        .startsWith(this.removerAcentos(letra).toLowerCase());
    });
  }
}
