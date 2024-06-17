import { Injectable } from '@angular/core';

interface Contato {
  id: number;
  nome: string;
  telefone: string;
}

@Injectable({
  providedIn: 'root',
})
export class ContatoService {
  private _contatos: Contato[] = [
    { id: 1, nome: 'Ana', telefone: '29 278869420' },
    { id: 3, nome: 'Bruno', telefone: '95 695521583' },
    { id: 5, nome: 'Carlos', telefone: '94 543197849' },
    { id: 6, nome: 'Cláudia', telefone: '31 176437098' },
    { id: 7, nome: 'Daniel', telefone: '56 613692441' },
  ];

  constructor() {
    const contatosLocalStorage = localStorage.getItem('contatos');
    const contatosLocalStorageKey = contatosLocalStorage
      ? JSON.parse(contatosLocalStorage)
      : null;

    this._contatos = contatosLocalStorageKey || null;

    localStorage.setItem('contatos', JSON.stringify(this._contatos));
  }

  obterContatos() {
    return this._contatos;
  }
}
