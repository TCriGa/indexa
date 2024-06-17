import { Routes } from '@angular/router';
import { FormContatoComponent } from './page/form-contato/form-contato.component';
import { ListaContatosComponent } from './page/lista-contatos/lista-contatos.component';

export const routes: Routes = [
  {
    path: 'forms',
    component: FormContatoComponent,
  },
  {
    path: 'lista-contatos',
    component: ListaContatosComponent,
  },
  {
    path: '',
    redirectTo: '/lista-contatos',
    pathMatch: 'full',
  },
];
